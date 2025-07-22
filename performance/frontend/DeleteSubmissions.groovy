import org.apache.http.client.methods.*
import org.apache.http.impl.client.*
import org.apache.http.util.EntityUtils
import groovy.json.JsonSlurper
import java.nio.file.*
import java.nio.charset.StandardCharsets

def http = HttpClients.createDefault()

// Resolve loginDataFile (passed via -DloginDataFile=... or default to logins-dev.csv)
def fileName = props.get("loginDataFile") ?: "logins-dev.csv"

// Resolve the path relative to the JMX file (working directory)
def fullPath = new File(fileName).getAbsoluteFile().toPath()

// Read the file
def lines = Files.readAllLines(fullPath, StandardCharsets.UTF_8)
def header = lines.remove(0)
def columns = header.split(",")

log.info "CSV Columns: ${columns.join(', ')}"

for (line in lines) {
    def values = line.split(",", -1)
    def data = [columns, values].transpose().collectEntries { it }

    def licenceNumber = data["licence"]
    def postcode = data["postcode"]

    def season = new Date().format("yyyy")
    def apiUrl = vars.get("api_url")  // Ensure this is set in the test plan or User Defined Vars

    log.info "Using licenceNumber=${licenceNumber}, postcode=${postcode}, season=${season}"

    try {
        // 1. GET contactId
        def encodedPostcode = URLEncoder.encode(postcode, "UTF-8")
        def encodedLicenceNumber = URLEncoder.encode(licenceNumber, "UTF-8")
        def url = "${apiUrl}/api/licence/${encodedLicenceNumber}?verification=${encodedPostcode}"
        def getContactId = new HttpGet(url)
        def contactRes = http.execute(getContactId)
        def contactJson = new JsonSlurper().parseText(EntityUtils.toString(contactRes.entity))
        def contactId = contactJson.contact.id
        log.info "Fetched contactId=${contactId}"

        // 2. GET submissionId
        def getSubmission = new HttpGet("${apiUrl}/api/submissions/search/getByContactIdAndSeason?contact_id=${contactId}&season=${season}")
        def subRes = http.execute(getSubmission)
        def statusCode = subRes.getStatusLine().getStatusCode()

        if (statusCode == 200) {
            def subJson = new JsonSlurper().parseText(EntityUtils.toString(subRes.entity))
            def submissionId = subJson._links.self.href.tokenize('/').last()
            log.info "Fetched submissionId=${submissionId}"

            // 3. DELETE submission
            def deleteReq = new HttpDelete("${apiUrl}/api/submissions/${submissionId}")
            def delRes = http.execute(deleteReq)
            def delStatus = delRes.getStatusLine().statusCode
            log.info "Delete status code: ${delStatus}"
        } else {
            log.info "No submissions found (status ${statusCode})"
        }

    } catch (Exception e) {
        log.error("Error processing licence=${licenceNumber}", e)
    }
}

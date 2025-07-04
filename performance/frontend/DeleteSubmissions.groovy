import org.apache.http.client.methods.*
import org.apache.http.impl.client.*
import org.apache.http.util.EntityUtils
import groovy.json.JsonSlurper

def http = HttpClients.createDefault()

def licenceNumber = vars.get("licence")
def postcode = vars.get("postcode")
def season = 2025

def apiUrl = vars.get("api_url")

log.info "Using licenceNumber=${licenceNumber}, postcode=${postcode}, season=${season}"

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
    log.info "No submissions found"
}

def respText = prev.getResponseDataAsString();
if (!respText.contains("Did you fish")
    && !respText.contains("Which season does your catch return cover")) {
    def failure = "Duplicate login: " + vars.get("licence") + "," + vars.get("postcode")
    log.error(failure)
    AssertionResult.setFailureMessage(failure)
    AssertionResult.setFailure(true)
}

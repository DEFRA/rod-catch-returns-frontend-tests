def respText = prev.getResponseDataAsString();
if (respText.contains("You have not entered a correct licence number and postcode")) {
    def failure = "Login failure: " + vars.get("licence") + "," + vars.get("postcode")
    log.error(failure)
    AssertionResult.setFailureMessage(failure)
    AssertionResult.setFailure(true)
}

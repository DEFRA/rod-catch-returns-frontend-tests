def respText = prev.getResponseDataAsString()
vars.put("SELECT_SEASON", "" + respText.contains("Which season does your catch return cover"))

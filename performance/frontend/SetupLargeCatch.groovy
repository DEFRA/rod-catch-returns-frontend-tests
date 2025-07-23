// Get 10 days before today using Groovy's built-in date math
def tenDaysAgo = new Date() - 10

// Extract day and month
int dayNumber = tenDaysAgo[Calendar.DAY_OF_MONTH]
int monthNumber = tenDaysAgo[Calendar.MONTH] + 1 // Calendar.MONTH is zero-based

// Set JMeter variables
vars.put("dayNumber", "" + dayNumber)
vars.put("monthNumber", "" + monthNumber)

Random random = new Random()

// Was the catch released
String[] releasedOptions = ["true", "false"]
vars.put("released", releasedOptions[random.nextInt(releasedOptions.length)])

// The catch method
String[] methods = ["methods/1", "methods/2", "methods/3"]
vars.put("method", methods[random.nextInt(methods.length)])

// The species caught
String[] species = ["species/1", "species/2"]
vars.put("species", species[random.nextInt(species.length)])

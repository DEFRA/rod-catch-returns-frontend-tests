Random random = new Random()

// The date caught
vars.put("dayNumber", "" + (random.nextInt(28) + 1))
vars.put("monthNumber", "" + (random.nextInt(12) + 1))

// Was the catch released
String[] releasedOptions = ["true", "false"]
vars.put("released", releasedOptions[random.nextInt(releasedOptions.length)])

// The catch method
String[] methods = ["methods/1", "methods/2", "methods/3"]
vars.put("method", methods[random.nextInt(methods.length)])

// The species caught
String[] species = ["species/1", "species/2"]
vars.put("species", species[random.nextInt(species.length)])

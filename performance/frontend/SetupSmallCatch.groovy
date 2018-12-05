// Catch counts
Random random = new Random()
Integer method1Count = random.nextInt(9) + 1 // number between 1 and 10
Integer method2Count = random.nextInt(9) + 1 // number between 1 and 10
Integer method3Count = random.nextInt(9) + 1 // number between 1 and 10
Integer releasedCount = random.nextInt(method1Count + method2Count + method3Count)
vars.put("flyCount", method1Count.toString())
vars.put("baitCount", method2Count.toString())
vars.put("spinnerCount", method3Count.toString())
vars.put("releasedCount", releasedCount.toString())

// Month of the small catch entry
Integer monthIndex = null
String[] months = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"]
HashSet usedMonths = vars.getObject("usedMonths")

if (usedMonths == null) {
    usedMonths = new HashSet()
}

if (usedMonths.size() == months.length) {
    log.error("No more months available, you can only have " + months.length + " small catches.")
    ctx.getEngine().stopTest()
    return
}

while (monthIndex == null || usedMonths.contains(monthIndex)) {
    monthIndex = random.nextInt(months.length)
}

usedMonths.add(monthIndex)
vars.putObject("usedMonths", usedMonths)
vars.put("month", months[monthIndex])

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

int currentMonthIndex = Calendar.getInstance().get(Calendar.MONTH) // 0-based
HashSet usedMonths = vars.getObject("usedMonths")

if (usedMonths == null) {
    usedMonths = new HashSet()
}

if (usedMonths.size() == currentMonthIndex + 1) {
    log.error("No more months available, you can only have " + (currentMonthIndex + 1) + " small catches.")
    ctx.getEngine().stopTest()
    return
}

Integer monthIndex = null
while (monthIndex == null || usedMonths.contains(monthIndex)) {
    monthIndex = random.nextInt(currentMonthIndex + 1) // ensures it's within range
}

usedMonths.add(monthIndex)
vars.putObject("usedMonths", usedMonths)
vars.put("month", (monthIndex + 1).toString()) // Convert 0-based to 1-based
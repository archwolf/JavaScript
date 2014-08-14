function divisionBy3(value) {
    var sum = 0;

    while (value > 0) {
        sum += value % 10;
        value = Math.floor(value / 10);
    }

    if (sum % 3 == 0) {
        return "the number is divided by 3 without remainder";
    }
    else {
        return "the number is not divided by 3 without remainder";
    }
}

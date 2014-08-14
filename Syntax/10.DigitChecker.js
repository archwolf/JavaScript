function checkDigit(value) {
    var value = (value / 100) % 10;
    value = Math.floor(value);
    if (value==3) {
        console.log(true);
    } else {
        console.log(false);
    }

}
checkDigit(1235);
checkDigit(25368);
checkDigit(123456);

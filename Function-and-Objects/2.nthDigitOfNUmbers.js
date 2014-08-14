function findNthDigit(arr) {
    var result = 0;
    var count = 0;
    var number = arr[1].toString().replace('.', '').replace('-', "");
    number = number.split("").map(Number);
    if (number.length < arr[0]) {
        console.log("The number doesn't have " + arr[0] + " digits");
    }
    for (var i = 0; i < number.length; i++) {
        if (arr[0] == number.length - i) {
            console.log(number[i]);
        }
    }
}
findNthDigit([6, 888.88]);
findNthDigit([2, -55]);
findNthDigit([1, 6]);
findNthDigit([6, 923456]);
findNthDigit([3, 1451.78]);

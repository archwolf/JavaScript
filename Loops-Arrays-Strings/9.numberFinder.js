function findMostFreqNum(value) {
    var count = 1;
    var maxCount = 0;
    var number;
    var maxNumber;
    for (var i = 0; i < value.length; i++) {
        for (var i = 0; i < value.length; i++) {
            for (var j = 0; j < value.length; j++) {
                if (value[j] < value[j - 1]) {
                    value.splice(0, 0, value[j]);
                    value.splice(j + 1, 1);
                }
            }
        }
        for (var i = 0; i < value.length; i++) {
            if (value[i] == value[i - 1]) {
                count++;
                if (maxCount < count) {
                    maxNumber = value[i];
                    maxCount = count;
                }

            }
            else {
                count = 0;
                count++;
                number = value[i];

            }
        }
    }
    if (count > maxCount) {
        number = value[0];
        console.log(number + " (" + count + " times)");
    }
    else {
        console.log(maxNumber + " (" + maxCount + " times)");
    }

}

findMostFreqNum([4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3]);
findMostFreqNum([2, 1, 1, 5, 7, 1, 2, 5, 7, 3, 87, 2, 12, 634, 123, 51, 1]);
findMostFreqNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);

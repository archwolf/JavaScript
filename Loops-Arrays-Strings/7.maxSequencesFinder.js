function findMaxSequence(value) {
    var array = new Array(0);
    var tempArray = new Array(0);
    var maxArray = new Array(0);
    var count = 0;
    var maxCount = 0;
    var higherCount = 0;
    for (var i = 0; i < value.length; i++) {

        if (value[i] > value[i - 1]) {
            if (count >= 1) {

                if (maxCount == 0) {
                    maxCount = count + 1;
                    array.push(tempArray);
                    array.push(value[i]);
                    if (higherCount <= maxCount) {
                        higherCount = maxCount;
                        maxArray = array;
                    }
                }
                else {
                    array.push(value[i]);
                    maxCount++;
                    if (higherCount <= maxCount) {
                        higherCount = maxCount;
                        maxArray = array;
                    }
                }


            }
            else if (maxCount >= count) {
                maxCount++;
                array.push(value[i]);
            }

        }
        else if (value[i] <= value[i - 1] || count == 0) {

            maxCount = 0;
            tempArray = [0];
            count = 0;
            tempArray = value[i];
            count++;
            array = [];
        }
    }
    if (higherCount != 0) {
        console.log(maxArray);
    }
    else {
        console.log("no");
    }
}
findMaxSequence([3, 2, 3, 4, 2, 2, 4]);
findMaxSequence([3, 5, 4, 6, 1, 2, 3, 6, 10, 32]);
findMaxSequence([3, 2, 1]);

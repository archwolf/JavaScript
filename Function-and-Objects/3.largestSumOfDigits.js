function findLargestSumOfDigits(nums) {
    var maxSum = 0;
    var tempSum = 0;
    var resultNumber;
    var numbers = new Array(0);
    for (var i = 0; i < nums.length; i++) {
        tempSum = 0;
        numbers.length = 0;
        numbers = nums[i].toString().replace('-', '').split('');
        numbers = numbers.map(Number);
        for (var j = 0; j < numbers.length; j++) {
            if (nums[i] > 9 || nums[i] < -9) {
                tempSum += numbers[j];
                if (maxSum < tempSum) {
                    maxSum = tempSum;
                    resultNumber = nums[i];

                }
            }
        }

    }
    console.log(resultNumber);
}

findLargestSumOfDigits([5, 10, 15, 111]);
findLargestSumOfDigits([33, 44, -99, 0, 20]);
findLargestSumOfDigits(['hello']);
findLargestSumOfDigits([5, 3.3]);

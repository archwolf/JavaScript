function findMinAndMax(nums) {
    var min = Math.min.apply(null, nums);
    var max = Math.max.apply(null, nums);
    return {
        'Min': min,
        'Max': max
    };
}

console.log("Min -> " + findMinMax([1, 2, 1, 15, 20, 5, 7, 31]).Min);
console.log("Max -> " + findMinMax([1, 2, 1, 15, 20, 5, 7, 31]).Max);
console.log("Min -> " + findMinMax([2, 2, 2, 2, 2]).Min);
console.log("Max -> " + findMinMax([2, 2, 2, 2, 2]).Max);
console.log("Min -> " + findMinMax([500, 1, -23, 0, -300, 28, 35, 12]).Min);
console.log("Max -> " + findMinMax([500, 1, -23, 0, -300, 28, 35, 12]).Max);

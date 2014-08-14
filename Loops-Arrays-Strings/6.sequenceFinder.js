function findMaxSequance(value) {
    var count = 0;
    var maxCount = 0;
    var variable;
    var maxVariable;
    var array = new Array(0);
    for (var i = 0; i < value.length; i++) {
        if (value[i] === value[i - 1]) {
            count++;
            if (maxCount < count) {
                maxCount = count;
            }
            else if (count >= maxCount) {
                maxVariable = value[i];
            }
            else if (maxCount > count) {
                maxCount++;
            }
        }
        else if (value[i] != value[i - 1]) {
            count = 0;
            variable = value[i];
            count++;
        }
    }
    if (maxCount == 0) {
        for (var i = 0; i < count; i++) {
            array.push(variable);
        }
        console.log(array);
    }
    else if (maxCount >= count) {
        for (var i = 0; i < maxCount; i++) {
            array.push(maxVariable);
        }
        console.log(array);
    }
}
findMaxSequance([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
findMaxSequance(['happy']);
findMaxSequance([2, 'qwe', 'qwe', 3, 3, '3']);

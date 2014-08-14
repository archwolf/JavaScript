function sortArray(value) {
    for (var i = 0; i < value.length; i++) {
        for (var j = 0; j < value.length; j++) {
            if (value[j] < value[j - 1]) {
                value.splice(0, 0, value[j]);
                value.splice(j + 1, 1);
            }
        }
    }
    console.log(value);
}
sortArray([12, 12, 50, 2, 6, 22, 51, 712, 6, 3, 3]);
sortArray([5, 4, 3, 2, 1]);

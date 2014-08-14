function createArray(value) {
    var arr = new Array(value);
    for (var i = 0; i <= value; i++) {
        arr[i] = i * 5;
    }
    console.log(arr.join(", "));
}
createArray(20);

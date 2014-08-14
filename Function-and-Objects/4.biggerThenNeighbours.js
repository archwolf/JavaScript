function biggerThenNeighbouts(index, arr) {
    if (index > arr.length - 1) {
        console.log('invalid index');
    }
    for (var i = 0; i < arr.length; i++) {
        if (index == i) {
            if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
                console.log('bigger');

            }
            else if (index == 0) {
                console.log('only one bigger');
            }
            else if (arr[i] <= arr[i - 1] || arr[i] <= arr[i + 1]) {
                console.log('not bigger');
            }

        }


    }
}
biggerThenNeighbouts(2, [1, 2, 3, 3, 5]);
biggerThenNeighbouts(2, [1, 2, 5, 3, 4]);
biggerThenNeighbouts(5, [1, 2, 5, 3, 4]);
biggerThenNeighbouts(0, [1, 2, 5, 3, 4]);

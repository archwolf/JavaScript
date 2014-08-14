function reverseString(value) {
    var myString = '';
    for (var i = 0; i < value.length; i++) {
        myString += value[value.length - i - 1];
    }
    console.log(myString);
}
reverseString('sample');
reverseString('softUni');
reverseString('java script');

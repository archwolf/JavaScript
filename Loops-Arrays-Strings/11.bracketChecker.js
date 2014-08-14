function checkBrackets(value) {
    var leftBracket = 0;
    var rightBracket = 0;
    for (var i = 0; i < value.length; i++) {
        if (value[i] == '(') {
            leftBracket++;
        }
        else if (value[i] == ')') {
            rightBracket++;
        }
    }
    if (leftBracket == rightBracket) {
        console.log('corrrect');
    }
    else {
        console.log('incorrect');
    }
}
checkBrackets('( ( a + b ) / 5 – d )');
checkBrackets(') ( a + b ) )');
checkBrackets('( b * ( c + d *2 / ( 2 + ( 12 – c / ( a + 3 ) ) ) )');

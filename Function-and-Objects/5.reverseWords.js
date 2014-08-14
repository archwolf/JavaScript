function reverseWordsInString(str) {
    var word = new Array();
    var array = str.split(' ');
    var tempLetter = '';
    var result = '';

    for (var i = 0; i < array.length; i++) {
        word = array[i].toString().split('');

        for (var j = 0; j < word.length; j++) {
            result += word[word.length - j - 1];
        }
        if (i != array.length - 1) {
            result += " ";
        }

    }
    console.log(result);
}
reverseWordsInString('Hello, how are you.');
reverseWordsInString('Life is pretty good, isn’t it?');

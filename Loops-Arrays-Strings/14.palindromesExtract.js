function findPalindtomes(value) {
    var text2 = value.replace(/([.,*+?^=!:${}()|\[\]\/\\])/g, '');
    var text = text2.toLowerCase().split(' ');
    var tempResult = '';

    for (var i = 0; i < text.length; i++) {
        if (text[i] == text[i].split('').reverse().join('')) {
            tempResult += text[i] + ", ";
        }
    }
    console.log(tempResult.slice(0, -2));
}
findPalindtomes('There is a man, his name was Bob.');

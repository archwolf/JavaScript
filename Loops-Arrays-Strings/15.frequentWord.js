function mostFrequendWord(value) {
    var text2 = value.replace(/([.,*+?^=!:${}()|\[\]\/\\])/g, '');
    var text = text2.toLowerCase().split(" ");
    var count = 1;
    var maxCount = 0;
    var word;
    var maxWord = new Array();
    for (var i = 0; i < text.length; i++) {
        for (var i = 0; i < text.length; i++) {
            text.sort();
        }
    }
    for (var i = 0; i < text.length; i++) {
        if (text[i] == text[i - 1]) {
            count++;
            if (count > maxCount) {
                maxWord.length = 0;
                maxWord.push(text[i]);
                maxCount = count;
            }

            else if (maxCount = count) {
                maxCount = count;
                maxWord.push(text[i]);
            }

        }
        else {

            count = 0;
            count++;
            word = text[i];
        }
    }

    for (var i = 0; i < maxWord.length; i++) {
        console.log(maxWord[i] + " ->" + maxCount + " times");
    }
}
mostFrequendWord('Welcome to SoftUni. Welcome to Java. Welcome everyone.');
mostFrequendWord('Hello my friend, hello my darling. Come on, come here. Welcome, welcome darling.');
mostFrequendWord('in the middle of the night');

function findCardFrequency(value) {
    var text2 = value.replace(/([♣♦♥♠])/g, '');
    var text = text2.split(" ");
    var count = 0;
    var singleValue = (100 / text.length).toFixed(2);
    for (var i = 0; i < text.length; i++) {
        for (var i = 0; i < text.length; i++) {
            text.sort();
        }
    }
    for (var i = 0; i < text.length; i++) {
        if (text[i] == text[i - 1]) {
            count++;
            if (i == text.length - 1) {
                console.log(text[i] + " -> " + (count * singleValue).toFixed(2) + "%");
            };
        }
        else {
            if (i != 0) {
                console.log(text[i - 1] + " -> " + (count * singleValue).toFixed(2) + "%");
            }

            count = 0;
            count++;
        }
    }
}
findCardFrequency('8♥ 2♣ 4♦ 10♦ J♥ A♠ K♦ 10♥ K♠ K♦');
findCardFrequency('J♥ 2♣ 2♦ 2♥ 2♦ 2♠ 2♦ J♥ 2♠');
findCardFrequency('10♣ 10♥');

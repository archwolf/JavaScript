function countSubstringOccur(value) {
    var count = 0;
    var keyWord = value[0];
    var text = value[1].toLowerCase();
    console.log(text.split(keyWord).length - 1);
}
countSubstringOccur(['in', "We are living in a yellow submarine. We don't have anything else. Inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days."]);
countSubstringOccur(['your', 'No one heard a single word you said. They should have seen it in your eyes. What was going around your head.']);
countSubstringOccur(['but', "But you were living in another world tryin' to get your message through."]);

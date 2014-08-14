function replaceSpaces(value) {
    var text = value;
    var replace = text.replace(/ /g, '\u00a0');
    console.log(replace);
}
replaceSpaces("But you were living in another world tryin' to get your message through");

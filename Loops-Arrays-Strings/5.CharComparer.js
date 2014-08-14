function compareChar(arrOne, arrTwo) {
    if (arrOne.length == arrTwo.length)
    {
        for (var i = 0; i <= arrOne.length; i++) 
        {
            if (arrOne[i] != arrTwo[i]) {
                console.log("Not Equal");
                break;
            }
            else if (i == arrOne.length) {
                console.log("Equal")
            }
        }
                   
    }
    else {
        console.log("Not Equal");
    }

}
compareChar(['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q'], ['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q']);
compareChar(['3', '5', 'g', 'd'], ['5', '3', 'g', 'd']);
compareChar(['q', 'g', 'q', 'h', 'a', 'k', 'u', '8', '}', 'q', '.', 'h', '|', ';'], ['6', 'f', 'w', 'q', ':', '”', 'd', '}', ']', 's', 'r']);

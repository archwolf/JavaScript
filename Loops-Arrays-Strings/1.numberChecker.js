ffunction printNumbers(n) {
    var count = 0;
    var arr = [];
    for (var i = 2; i <= n; i++) {
        if (i % 5 != 0 && i %4 !=0) {   
            count++;
            arr.push(i)
        }
       
    }
    if (count==0 || n==1) {
        console.log("no");
    }
    console.log(arr.join(", "));
}
printNumbers(20);
printNumbers(1);
printNumbers(13);

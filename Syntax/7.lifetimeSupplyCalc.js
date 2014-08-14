function calcSupply(age, maxAge, amount, favFood) {
    var sum = ((maxAge - age) * 365) * amount;
    console.log(sum + "kg of " + favFood + " would be enough until i am "+ maxAge + " years old");
}
console.log(calcSupply(38, 118, 0.5, "chocolate"));
console.log(calcSupply(20, 87, 2, "fruits"));
console.log(calcSupply(16, 102, 1.1, "nuts"));

function calcCylinderVol(radius, height) {
    var sum = ((radius * radius) * Math.PI) * height;
    console.log(sum.toFixed(3));
}
calcCylinderVol(2, 4);
calcCylinderVol(5, 8);
calcCylinderVol(12, 3);

function treeHouseCompare(a , b) {
    var house = a * a + (a * (a * 2 / 3)) / 2;
    var treeArea = b * (b / 3) + Math.PI * (b * 2 / 3) * (b * 2 / 3);
    if (house>treeArea) {
        console.log ("house/" + house.toFixed(2));
    } else {
        console.log("tree/ " + treeArea.toFixed(2));
    }
}
treeHouseCompare(3, 2);
treeHouseCompare(3, 3);
treeHouseCompare(4, 5);

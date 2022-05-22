const array1 = [10.5, 20, 30, 40, 50.8, 212, 758, 1002, 2];
function numMaxMin(array) {
    return console.log("Maior número: " + Math.max.apply(Math, array) + "\nMenor número: " + Math.min.apply(Math, array));
}
numMaxMin(array1);





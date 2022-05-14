var numsArr = [1,2,1,2,2,1,2,2,2,1,7,6,7,6,7,6,7,8,10,2,1];
var chosenNum = 1;

var result = numsArr.reduce(function(n, val) {
    return n + (val === chosenNum);
}, 0);

console.log("O número escolhido apareceu " + result + " vezes.")

var numbers = [1, 17.8, -1, 420.7, 57, 66, 111];

var result = numbers.slice().sort(function(a, b) {
  return a - b;
});

var tinyNum = result[0],                      
    largeNum  = result[result.length - 1];

console.log('O maior número é: ' + largeNum);
console.log('O menor número é: ' + tinyNum);

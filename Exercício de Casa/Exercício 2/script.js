let someNumbers = [10, 28, 9, 301, 8, 6.5, 1];

someNumbers.sort((a,b) => a-b);

const menorValor = parseFloat(someNumbers[0]);
const maiorValor = parseFloat(someNumbers[someNumbers.length-1]);

console.log(menorValor, maiorValor);
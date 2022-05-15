let someNumbers = [7, 2.4, 9, 5.8, 8, 10.5, 3];


someNumbers.sort((a,b) => a-b);

const menorValor = parseFloat(someNumbers[0]);
const maiorValor = parseFloat(someNumbers[someNumbers.length-1]);

console.log(menorValor, maiorValor);



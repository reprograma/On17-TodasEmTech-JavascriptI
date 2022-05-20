const arrayOfNumbers = [1, 2, 3, 4, 5, 19, 0.9, 28, 399, 12000, 12348.3, 29];


// Resolução do Exercício 2
function maxAndMinOfArray (array) {
    const minNumber = Math.min(...arrayOfNumbers);
    const maxNumber = Math.max(...arrayOfNumbers);

    return console.log(`O maior número é: ${maxNumber} e o menor número é: ${minNumber}`);
}
// Chamando a função do exercício 2
maxAndMinOfArray(arrayOfNumbers);
// Resolução exercício 3
function frequencyInArray(arr = [], value) {
    let frequency = 0;

    arr.forEach((i) => {
        if (i == value) {
            frequency++;
        }
    });

    return frequency;
}

// Chamando a função do exercício 3
const valueOfTest = 2;
const result = frequencyInArray([1, 1, 2, 2, 2, 3, 4, 9, 10], valueOfTest);
console.log(`Foram encontrados ${result} ocorrências do número ${valueOfTest}`);
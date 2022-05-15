// 3º Desafio : Encontre a frequência
// Crie uma função que seja capaz de, passado como parâmetro um array composto de apenas números inteiros, encontrar a frequência de um elemento numérico dentro do array e retorná-la no console.log(). Exemplo:

//      Input:
//      array = [1, 1, 1, 1, 2]
//      array.length = 5
//      X = 1
//      Output:
//      4
//      Explanation: Frequency of 1 is 4.
// Opcional: Criar uma função que encontre a frequência de um elemento string dentro de um array composto de apenas elementos string.

function frequency(arr = [], target) {
  let count = 0;

  arr.forEach((i) => {
    if (i === target) {
      count++;
    }
  });

  return count;
}

const findValue = 2;

const result = frequency([1, 1, 1, 5, 2, 5], findValue);
console.log(`Foram encontradas ${result} ocorrências do número ${findValue}.`);

# 3º Desafio : Encontre a frequência

1. Crie uma função que seja capaz de, **passado como parâmetro um array composto de apenas números inteiros**, encontrar a frequência de um elemento numérico dentro do array e retorná-la no `console.log()`. Exemplo:

   ```JavaScript
        Input:
        array = [1, 1, 1, 1, 2]
        array.length = 5
        X = 1
        Output: 
        4
        Explanation: Frequency of 1 is 4.
   ```

2. **Opcional:** Criar uma função que encontre a frequência de um elemento `string` dentro de um array composto de apenas elementos `string`.


// Exercício 1
function countRepeatedNumbers(array, numberRequest) {
  const arrayRepeatedNumbers = array.filter((number) => {
    if (number === numberRequest) return number;
  });
  console.log(arrayRepeatedNumbers);
  console.log(
    `Explanation: Frequency of ${numberRequest} is ${arrayRepeatedNumbers.length}`
  );
}

countRepeatedNumbers([1, 1, 1, 1, 2], 1);


// Exercício 2
function countRepeatedLetters(array, letterRequest) {
  let count = 0
  for(let word of array) {
    for(let letter of word) {
      if(letter === letterRequest) {
        count++
        }
      }
    }
    console.log(`Frequency of '${letterRequest}' is ${count}`)
}

countRepeatedLetters(["abacaxi", "lousa", "amora"], "a")
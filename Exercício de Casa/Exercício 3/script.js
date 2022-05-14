/*1 - Crie uma função que seja capaz de, **passado como parâmetro um array composto de apenas números inteiros**, encontrar a frequência de um elemento numérico dentro do array e retorná-la no `console.log()`. Exemplo:
JavaScript
Input:
array = [1, 1, 1, 1, 2]
array.length = 5
X = 1
Output: 
4
Explanation: Frequency of 1 is 4.*/

const array = [1, 1, 1, 1, 2];
const num = 1;

const result = array.filter((item) => {if(item===num) return num });

console.log(result);


/*2 - Criar uma função que encontre a frequência de um elemento `string` dentro de um array composto de apenas elementos `string`.*/


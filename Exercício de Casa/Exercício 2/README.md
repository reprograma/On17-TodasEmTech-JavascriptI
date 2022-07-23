# 2º Desafio : Valor Máximo/Valor Mínimo

Crie uma função que seja capaz de, **passado como parâmetro um array composto de apenas números**, encontrar e retornar o maior valor e o menor valor existente nesse array.

*OBS:* Essa função deverá funcionar para qualquer array composto por números - inclusive, números decimais.

function orderArray(array) {
  array = array.sort(function (a, b) {
    return a > b ? 1 : a < b ? -1 : 0;
    // return a - b;
  });
  console.log(array)
  console.log(`Menor valor do array: ${array[0]}`);
  console.log(`Maior valor do array: ${array[array.length - 1]}`);
}


orderArray([8.5, 2, 13, 1, 1.2, 7]);
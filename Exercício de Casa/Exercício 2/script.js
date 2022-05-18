// # 2º Desafio : Valor Máximo/Valor Mínimo. Crie uma função que seja capaz de, 
// **passado como parâmetro um array composto de apenas números**, encontrar e 
// retornar o maior valor e o menor valor existente nesse array.

const arrayDeNumeros = [2, 3, 5, 6, 5.9, 5.6, 5, 1.9, 2.5, 4, 9, 3];

function verificandoNumeros(array) {
  array.sort(function (a, b) {
    return a - b;
  });

  return console.log(
    `O menor número é ${array[0]} e o maior número é ${array[array.length - 1]}`
  );
}
verificandoNumeros(arrayDeNumeros);


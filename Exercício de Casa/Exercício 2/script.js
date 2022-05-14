// 2º Desafio - Valor Máximo/Valor Mínimo

/*Crie uma função que seja capaz de, **passado como parâmetro um array composto de apenas números**, encontrar e retornar o maior valor e o menor valor existente nesse array.

*OBS: Essa função deverá funcionar para qualquer array composto por números - inclusive, números decimais.*/

const anos = [1970, 2002, 1962, 2022, 1994, 1958, 5.2];

function maiorNum(arr){
  const maior = arr.reduce((acumulador, valorAtual) => {return Math.max(acumulador, valorAtual)});
  const menor = arr.reduce((acumulador, valorAtual) => {return Math.min(acumulador, valorAtual)})
  return `Maior valor: ${maior} e menor valor ${menor}.`;
}

console.log(maiorNum(anos));

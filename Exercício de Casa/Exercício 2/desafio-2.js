// 2º Desafio : Valor Máximo/Valor Mínimo
// Crie uma função que seja capaz de, passado como parâmetro um array composto de apenas números, encontrar e retornar o maior valor e o menor valor existente nesse array.

// OBS: Essa função deverá funcionar para qualquer array composto por números - inclusive, números decimais.

function maxAndMin(arr = []) {
  const sort = arr.sort((a, b) => {
    return a - b;
  });

  return {
    max: sort[sort.length - 1],
    min: sort[0],
  };
}

const retorno = maxAndMin([4, 2, 20, 93, 14, 56]);

console.log(retorno);
// console.log(maxAndMin([4, 2, 20, 93, 14, 56]));



// 2º Desafio : Valor Máximo/Valor Mínimo

const arrayNumber = [5, 7, 1.2, 8, 3.5, 1.15, 11, 3, 6, 9];

function comparandoNumeros(array) {
  array.sort(function (a, b) {
    return a - b;
  });

  return console.log(
    `O número de maior valor é ${array[array.length - 1]} e o número de menor valor é o ${array[0]}.`
  );
}

comparandoNumeros(arrayNumber);
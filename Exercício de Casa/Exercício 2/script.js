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

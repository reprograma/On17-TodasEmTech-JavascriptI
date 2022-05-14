//Solução 1
let arrayOfNumber = [8.5, 2, 13, 1, 1.2, 7, 8, 3, 5, 25];

function checkNumbers(array) {
  array.sort(function (a, b) {
    return a - b;
  });

  return console.log(
    `Menor número: ${array[0]}`,
    `Maior número: ${array[array.length - 1]}`
  );
}

checkNumbers(arrayOfNumber);

//Solução 2

function checkNumbers(array) {
  array.sort(function (a, b) {
    return a - b;
  });
  let maior = array[0];
  let menor = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] > maior) {
      maior = array[i];
    } else if (array[i] < menor) {
      menor = array[i];
    }
  }
  return { menor, maior };
}

console.log(checkNumbers(arrayOfNumber));

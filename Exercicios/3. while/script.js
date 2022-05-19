let listaDeNumeros = [
  5, 1, 4, 185, 98, 023, 412, 8, 2, 45, 0, 8, 2, 8, 856, 1, 02, 82, 02, 42, 4,
  23, 522, 1, 8, 2, 590, 1, 5, 15, 8, 4, 5, 12, 4, 0, 2, 0, 5, 0, 5, 1, 4, 5, 0,
];

const printaPequeno = (numeros) => {
  let contador = 0;
  while (contador <= numeros.length) {
    let numero = numeros[contador];
    if (numero < 5) {
      console.log(numero);
    }
    contador++;
  }
};

const printaPequeno2 = (numeros) => {
  let contador = 0;
  while (contador <= numeros.length) {
    numeros[contador] < 5 && console.log(numeros[contador]);
    contador++;
  }

  for (let c = 0; c <= numeros.length; c++) {
    numeros[c] < 5 && console.log(numeros[c]);
  }

  numeros.forEach((numero) => numero < 5 && console.log(numero));

  for (const numero of numeros) {
    numero < 5 && console.log(numero);
  }
};

printaPequeno2(listaDeNumeros);

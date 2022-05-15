const arrayDeNumeros = [
  5, 2, 3, 6, 5, 8, 4, 6, 2, 1, 5, 6, 7, 8, 9, 3, 2, 1, 5,
];
const numero = 5;

function frequenciaDoNumero(arrayDeNumeros, numeroEscolhido) {
  const arrayNumeroSelecioado = arrayDeNumeros.filter((numero) => {
    if (numero == numeroEscolhido) return numero;
  });
  console.log(arrayNumeroSelecioado);
  return `A frequencia do ${numeroEscolhido} é ${arrayNumeroSelecioado.length}`;
}

console.log(frequenciaDoNumero(arrayDeNumeros, numero));

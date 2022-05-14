function maiorMenor(numeros) {
  let maiorNumero = numeros[0];
  let menorNumero = maiorNumero;
  numeros.map((numero) => {
    if (numero > maiorNumero) maiorNumero = numero;
    if (numero < menorNumero) menorNumero = numero;
  });
  return { maiorNumero, menorNumero };
}

console.log(maiorMenor([0.5,1, 2.6, 2, 234, 4, 5, 7, 6]));

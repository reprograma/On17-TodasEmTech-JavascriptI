const numberArray = [1, 2, 4, 6, 5, 4, 1, 2, 8, 8, 9, 4, 1, 8, 8];
const number = 8;

function frequnecianumerica(numberArray, numeroEscolhido) {
  const numeroSelecionado = numberArray.filter((number) => {
    if (number == numeroEscolhido) return number;
  });
  console.log(numeroSelecionado);
  return `Frequencia do ${numeroEscolhido} é ${numeroSelecionado.length}`;
}
console.log(frequnecianumerica(numberArray, number));

// function frequnecianumerica(numberArray, numeroEscolhido) {
//   const numeroSelecionado = numberArray.filter((number) => {
//     if (number == numeroEscolhido) return number;
//   });
//   console.log(numeroSelecionado);
//   return `Frequencia do ${numeroEscolhido} é ${numeroSelecionado.length}`;
// }
// console.log(frequnecianumerica(numberArray, number));

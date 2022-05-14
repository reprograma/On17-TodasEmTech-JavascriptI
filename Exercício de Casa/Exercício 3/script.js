/*1. Crie uma função que seja capaz de, **passado como parâmetro um array composto de 
apenas números inteiros**, encontrar a frequência de um elemento numérico dentro do array e 
retorná-la no `console.log()`. Exemplo:

   ```JavaScript
        Input:
        array = [1, 1, 1, 1, 2]
        array.length = 5
        X = 1
        Output: 
        4
        Explanation: Frequency of 1 is 4.
   ```

2. **Opcional:** Criar uma função que encontre a frequência de um elemento `string` 
dentro de um array composto de apenas elementos `string`.*/

let numberArray = [1, 2, 4, 6, 5, 4, 1, 2, 8, 8, 9, 4, 1, 8, 8,];
const number = 8;

function frequnecianumerica(numberArray, numeroEscolhido) {
    const numeroSelecionado = numberArray.filter((number) => {
        if (number == numeroEscolhido) return number;   
    });
    console.log(numeroSelecionado);
    return `Frequencia do ${numeroEscolhido} é ${numeroSelecionado.length}`;
}
 console.log(frequnecianumerica(numberArray,number));


/*const arrayDeNumeros = [
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
  
  console.log(frequenciaDoNumero(arrayDeNumeros, numero));*/
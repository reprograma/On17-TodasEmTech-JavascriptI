function letter_frequency(s) {
    let arr = [];
    let i = 0;
    let str = s.toUpperCase();
    while (i < str.length){
        let char = str.charAt(i);
        if (arr[char]!== undefined){
            arr[char]++;
            console.log('definido',  arr[char], char)
        } else {arr[char] = 1;
            console.log('indefinido',  arr[char], char)
        }


        i++
    }
    return arr;
}
letter_frequency("Leticia");

const arrayDeNumeros = [
    345, 342, 3, 6, 345, 8, 344, 6, 2, 1, 555, 6, 7, 458, 9, 3, 2, 1, 345,
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




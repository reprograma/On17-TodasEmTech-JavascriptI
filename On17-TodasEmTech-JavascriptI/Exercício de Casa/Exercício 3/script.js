const arrayNumerico = [5, 2, 3, 6, 5, 8, 4, 6, 2, 1, 5, 6, 7, 8, 9, 3, 2, 1, 5];
  let escolhido = 5;
  

  function frequenciaDoNumero(arrayDeNumeros, numberSelect) {
    let arrayNumeroSelecioado = 0;

    arrayDeNumeros.map((number) => {
      if (number === numberSelect) {
      arrayNumeroSelecioado++;
      }
    });


    return console.log(`A frequência do número ${escolhido} é  ${arrayNumeroSelecioado}`);
  }

  frequenciaDoNumero(arrayNumerico, escolhido);
 
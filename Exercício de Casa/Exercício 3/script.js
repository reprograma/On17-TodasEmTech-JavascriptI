const arrayNumeros = [
    5, 2, 3, 6, 5, 8, 4, 6, 2, 1, 5, 6, 7, 8, 9, 3, 2, 1, 5,
  ];
  const numero = 5;
  
  function frequenciaNumero(arrayDeNumeros, numeroEscolhido) {
    const arrayNumeroSelecionado = arrayNumeros.filter((numero) => {
      if (numero == numeroEscolhido) return numero;
    });
    console.log(arrayNumeroSelecionado);
    return `A frequencia do ${numeroEscolhido} é ${arrayNumeroSelecionado.length}`;
  }
  
  console.log(frequenciaNumero(arrayNumeros, numero));
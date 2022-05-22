const caixinhaDeNumeros = [
    5, 7, 1, 8, 7, 7, 1, 3, 6, 10, 4, 6, 7, 11, 2, 1, 7,
  ];
  const numero = 7;
  
  function frequenciaDoNumero(arrayDeNumeros, numeroEscolhido) {
    const caixinhaDeNumerosSelecionados = arrayDeNumeros.filter((numero) => {
      if (numero == numeroEscolhido) return numero;
    });
    console.log(caixinhaDeNumerosSelecionados);
    return `A frequencia do ${numeroEscolhido} é ${caixinhaDeNumerosSelecionados.length}`;
  }
  
  console.log(frequenciaDoNumero(caixinhaDeNumeros, numero));

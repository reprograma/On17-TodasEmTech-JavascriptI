const scores = [1, 2, 2, 2, 5, 8, 9, 10];
  const numero = 2;
  
  function frequenciaDoNumero(scores, numeroEscolhido) {
    const arrayNumeroSelecionado = scores.filter((numero) => {
      if (numero == numeroEscolhido) return numero;
    });
    console.log(arrayNumeroSelecionado);
    return `A frequencia do ${numeroEscolhido} é ${arrayNumeroSelecionado.length}`;
  }
  
  console.log(frequenciaDoNumero(scores, numero));
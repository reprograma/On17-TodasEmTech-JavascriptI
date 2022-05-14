function frequencia (array, x) {
    let contagem = 0;
    array.map(function (n) {
      if (n === x) {
        contagem += 1;
      }
    });
  
    console.log(`A frequência de ${x} é ${contagem}`);
  }
  
  frequencia([1,2,3,4,1,1,1], 1);
  frequencia([1,2,3,2,1,3,2], 2);
  frequencia([3,3,3,3,1,1,1], 3);
function maxAndMin(arr = []) {
    const sort = arr.sort((a, b) => {
      return a - b;
    });
  
    return {
      max: sort[sort.length - 1],
      min: sort[0],
    };
  }
  
  const retorno = maxAndMin([4, 2, 20, 93, 14, 56]);
  
  console.log(retorno);
  // console.log(maxAndMin([4, 2, 20, 93, 14, 56]));
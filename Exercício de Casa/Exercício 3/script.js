function frequency(arr = [], target) {
    let count = 0;
  
    arr.forEach((i) => {
      if (i === target) {
        count++;
      }
    });
  
    return count;
  }
  
  const findValue = 2;
  
  const result = frequency([1, 1, 1, 5, 2, 5], findValue);
  console.log(`Foram encontradas ${result} ocorrências do número ${findValue}.`);
  
const number = [28, 12, 90, 28, 24, 08, 63, 28, 65, 5, 5, 3, 28, 10, 58, 84];

function repeatNUmber(){

  const countNumber = number.filter(item => item === 28).length;
  console.log(countNumber)
}

repeatNUmber(number)
const arrayOfNumbers = [1, 2, 3, 4, 4, 5, 6, 7, 4, 8, 9, 4, 10, 11, 4];
let repeatedNumber = 4;

function repeatCount(array, numberToCount) {
  let counter = 0;

  array.map((number) => {
    if (number === numberToCount) {
      counter++;
    }
  });
  return console.log(`Frequency of ${repeatedNumber} is  ${counter}`);
}

repeatCount(arrayOfNumbers, repeatedNumber);

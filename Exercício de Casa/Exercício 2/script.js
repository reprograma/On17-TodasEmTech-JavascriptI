let number = [28, 12, 90, 2.8, 24, 08, 63, 5.8];

function newNumbers(item) {
  item.sort((a, b) => a - b);
  return console.log(
    `Menor valor é ${item[0]}, 
    Maior valor é ${item[item.length - 1]}`,
  );
}
newNumbers(number);

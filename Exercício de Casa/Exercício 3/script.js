function frequency(array,num){
let count = 0;

for(let i = 0; i < array.length; i++){
  if(array[i] == num){
    count++;
  }
}
console.log(`A frequência do ${num} é ${count}`);
}

frequency([1, 382, 3, 1, 2, 3, 1, 9, 1],1);
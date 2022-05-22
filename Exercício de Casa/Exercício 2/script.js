// let array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let array = [110, 20, 5, 40, 50, 160, 10, 6, 4, 100];
let max=array[0];
let min=array[0];
for (let index = 0; index < array.length; index++) {
    if (array[index] > max) {
        max=array[index];
    }
    if (array[index] < min) {
        min=array[index];
    }
}

console.log(max)
console.log(min)
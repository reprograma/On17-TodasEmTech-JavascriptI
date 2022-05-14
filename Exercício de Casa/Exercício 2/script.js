const arr = [1, 3, 7, 23, 44, 0.9, 12];

const min = Math.min(...arr);
const max = Math.max(...arr);

console.log(min); // 0.9
console.log(max); // 44

//

sort arr = [1, 3, 7, 23, 44, 0.9, 12]
let max = 0;

for (let i = 0; i < arr.length; i++)
{
    if (arr[i] <= arr[i+1]) { 
        max = arr[i+1] 
    }
    else { 
        max = arr[i]
    }
}
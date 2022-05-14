const scores = [1, 2, 2, 2, 5, 8, 9, 10]
const getOccurrences = (array, value) => 
    array.reduce((acc, item) => value === item, ? acc + 1 : acc 0)
console.log(getOccurrences(scores, 2));
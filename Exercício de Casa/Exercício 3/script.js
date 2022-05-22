let numeros = [1,2,2,3,3,3,4,4,4,4];

function sequencia(array, element) {
    let count = 0;
    for (let index = 0; index < array.length; index++) {
        array[index]
        if (element === array[index]) {
            count++;
        }
    }
    console.log("O elemento " + element + " apareceu " + count + " vezes.");
}

sequencia(numeros, 4);

let textos = ["abc", "abc", "xyz", "uvw", "uvw", "uvw"];
sequencia(textos, "uvw");
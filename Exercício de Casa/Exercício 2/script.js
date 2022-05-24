const listaDeNumeros = [
    2, 6, 4, 6, 4, 8, 7, 3, 8, 2, 7, 3, 2, 9, 7, 4, 3, 6, 4, 9

]
function validandoNum(array) {
    array.sort(function (a, b) {
        return a - b
    })

    return console.log(
        `O menor número é ${array[0]} e o maior número é ${array[array.length - 1]}`
    );
}
validandoNum(listaDeNumeros);

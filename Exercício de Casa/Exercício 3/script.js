const listaDeNumeros = [
    2, 6, 4, 6, 4, 8, 7, 3, 8, 2, 7, 3, 2, 9, 7, 4, 3, 6, 4, 9

]
const numero = 6
function frequencia(listaDeNumeros, numeroEscolhido) {
    const numeroSelecionado = listaDeNumeros.filter((numero) => {
        if (numero == numeroEscolhido)
            return numero

    })
    console.log(numeroSelecionado)
    return `A frequencia do ${numeroEscolhido} é ${numeroSelecionado.length}`;

}
console.log(frequencia(listaDeNumeros, numero));


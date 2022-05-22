/* 1. Crie uma função que seja capaz de, **passado como parâmetro um array composto de apenas números inteiros**, encontrar a frequência de um elemento numérico dentro do array e retorná-la no `console.log()`. */

const numerosInteiros = [1, 2, 2, 2, 3, 6, 2];
let numeroRepetido = 2;

function prevalenciaNumero (arrayNumSelecionado, numeroSelecionado) {
let arraySelecionado = 0;

arrayNumSelecionado.map((number) => {
    if (number === numeroSelecionado) {
        arraySelecionado++;
    }
});

console.log(`A frequencia do número ${numeroRepetido} é ${arraySelecionado}`);

}

prevalenciaNumero(numerosInteiros, numeroRepetido);
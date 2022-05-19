/* const result = myFunction(4, 3);

function myFunction(a, b) {
  return a * b;
} */

/* function somaDoisValores(primeiroValor, segundoValor) {
  const soma = primeiroValor + segundoValor;
  return console.log(soma);
} */

/* const somaDoisValores = (primeiroValor, segundoValor) => {
  return primeiroValor + segundoValor;
}

console.log(somaDoisValores(5, 4));  */

let cabeca = ["olho", "sombrancelha"];

function montaString(nome, idade) {
  return ` Hello!, ${nome}. Voce tem, ${idade}, anos`;
}

const montaXingamento = (nome, xingamento) => `Oi ${nome} sua ${xingamento}!`;

function printaItens(item) {
  console.log(item);
}
let x = 0;

// cabeca.forEach((item) => console.log(item));

let chicoliro = ["eu", "sou", "o", "champion", "manéeeeeeé", "zão", "zão", "!"];
let grito = "e eu vou lutaaar sem pararrrr".split(" ");
let musica = chicoliro.slice(0, 4).concat(grito.concat(chicoliro.slice(4, -1)));

console.log(musica);

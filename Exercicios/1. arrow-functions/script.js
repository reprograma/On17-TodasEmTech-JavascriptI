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


/*function hello() {
  return console.log('Hello!');
}

hello();*/

/*function somaDoisValores(){
  const primeiroValor = 4;
  const segundoValor = 5;
  const soma = primeiroValor + segundoValor;
  return console.log(soma);
}


somaDoisValores();*/

/*function somaDoisValores(primeiroValor, segundoValor) {
  const soma = primeiroValor + segundoValor;
  return console.log(soma);
}

somaDoisValores(15, 20);*/

/*let listaFrutas = ["Uva" , "Banana" , "Manga" , "Cajá" , "Pinha"];

console.log(listaFrutas.length);


const minhafilha = [{
  nome:"marie",
  idade:1,
  castrada: true,
  cor:['branco','fofa'],
  caracteristica : ['esperta', 'mimada', 'preguiçosa']
},{
  nome:"marieJanne",
  idade:1,
  castrada: true,
  cor:['branco','fofa'],
  caracteristica : ['esperta', 'mimada', 'preguiçosa']
}]
console.log(minhafilha[1]['cor'])*/

let listaFrutas = ["Uva" , "Banana" , "Manga" , "Cajá" , "Pinha","figo","melancia"];

for (fruta = 2; fruta < listaFrutas.length; fruta++){
  console.log(`minha fruta é ${listaFrutas[fruta]}`)
}
let listaNumber = ["885", "984.9", "444", "528", "528.9"];
let maior = Number.NEGATIVE_INFINITY,
    menor = Infinity;

listaNumber.forEach(function(item){
  if (Number(item) > maior) maior = item;
  if (Number(item) < menor) menor = item;
});

console.log(maior, menor)

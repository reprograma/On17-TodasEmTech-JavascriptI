let listaNumber = ["999", "777.8", "667", "122", "888"];
 let maior = Number.NEGATIVE_INFINITY,
     menor = Infinity;

 listaNumber.forEach(function(item){
   if (Number(item) > maior) maior = item;
   if (Number(item) < menor) menor = item;
 });

 console.log(maior, menor)
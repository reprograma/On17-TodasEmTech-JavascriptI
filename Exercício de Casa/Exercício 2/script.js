/*# 2º Desafio : Valor Máximo/Valor Mínimo

Crie uma função que seja capaz de, **passado como parâmetro um 
array composto de apenas números**, encontrar e 
retornar o maior valor e o menor valor existente nesse array.

*OBS:* Essa função deverá funcionar para qualquer array composto por números - inclusive, números decimais.*/


const listNumber = [1.2,52,20,45,80,99,1,12.0,180,255,5.79,811];
  Array.min = function(array){
    return Math.min.apply(Math,array)
}
  Array.max = function(array){
    return Math.max.apply(Math,array)
}
console.log(Array.min(listNumber));
console.log(Array.max(listNumber));

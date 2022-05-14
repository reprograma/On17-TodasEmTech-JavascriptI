// const numeros = [5, 6, 85, 5, 5, 85]

// let numeroRepetido = 5
// function procuraNumero(numeros, numeroRepetido) {
//     for(let i = 0; i < 6; i++)
//     console.log(i)
// }

// procuraNumero(numeroRepetido, numeros)


const numeros = [
    5, 
    6, 
    85, 
    5, 
    5, 
    85,
    3,
    9,
    3,
    9
]



const arraySuperNova = [
    15, 
    5, 
    8, 
    10, 
    23, 
    11,
    11,
    99,
    32,
    69
]


 function encontrar(condicao, meuArray){

    const newarray = []
    meuArray.map((numero, index) => {
   
        if (numero === condicao) {
         newarray.push(numero)
       //   console.log(newarray)
        }
       
    })
console.log(newarray.length)

 }



 encontrar(5, numeros )


encontrar(11, arraySuperNova )


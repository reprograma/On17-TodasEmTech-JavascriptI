const numeros1 = [4, 7, 9, 11, 45, 68, 30];

const numeros2 = [5, 70, 0.5, 19, 70.4, 22];


function encontrandoValores(objeto) {
    const maximo = objeto.reduce((maior, y) => {return Math.max(maior, y)},-Infinity)
    const minimo = objeto.reduce((menor, y) => {return Math.min(menor, y)}, Infinity)
    
    console.log(maximo)
    console.log(minimo)
    return {maximo, minimo}

};

console.log(encontrandoValores(numeros2));



  // spread operator
// const maximo = Math.max(...objeto)



const grupoNumeros = [4, 14, 10, 65, 20, 19, 25];

grupoNumeros.sort((a,b) => a-b);

const valorMinimo = parseFloat(grupoNumeros[0]);
const valorMaximo = parseFloat(grupoNumeros[grupoNumeros.length-1]);

console.log(valorMinimo, valorMaximo);
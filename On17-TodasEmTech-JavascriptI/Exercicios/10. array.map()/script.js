const usuarios = [
    {user: 234, name: 'Marcia', idade: 40 },
    {user: 235, name: 'Lorena', idade: 20 },
    {user: 236, name: 'Patricia', idade: 24 },
    {user: 237, name: 'Mariana', idade: 15 },
    {user: 238, name: 'Isis', idade: 34 },
    {user: 239, name: 'Pietra', idade: 23 }
]

const mapeandoUsuario = usuarios.map((user) => {
 return console.log(user);
});

console.log(mapeandoUsuario);

const notas = [ 8.5, 9, 10, 7.5].sort(function(a, b) {
    return a - b;
  });

notas.shift();

let somaNotas = 0;

notas.map((nota) => {
    somaNotas += nota;
});

const resultado = somaNotas/notas.length;

console.log(resultado);
const listaDePaises = ['Argentina', 'Brasil', 'Mexico', 'EUA', 'Paraguai', 'Chile', 'Russia', 'Canadá'];

//const paisesSelecionados = listaDePaises.slice(2,3);

//listaDePaises.splice(5,2);

//listaDePaises.splice(6,1, "Uzbequistão", "Honduras");

//console.log(listaDePaises);

const usuarios = [
    {user:234, name: 'Marcia', idade:40 },
    {user:235, name: 'Lorena', idade:20 },
    {user:236, name: 'Patricia', idade:24 },
    {user:237, name: 'Mariana', idade:15 },
    {user:238, name: 'Isis', idade:34 },
    {user:239, name: 'Pietra', idade:23 }
]

usuarios.splice(1,1, {user: 235, name: 'Paula', idade: 45});

console.log(usuarios);
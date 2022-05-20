
const listagemDeFrutas = ["Uva", "Banana", "Manga", "Cajá", "Pinha", "Maçã", "Melão"];
const tamanhoListaDeFrutas = listagemDeFrutas.length;


for(let fruta = 0; fruta < tamanhoListaDeFrutas; fruta++) {
    if (listagemDeFrutas.includes('Cajá') == true) {
       console.log('Temos Cajá disponível em nosso estoque');
       break;
   }
}


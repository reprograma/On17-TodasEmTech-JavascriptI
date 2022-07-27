];

books.splice(1,5, {isbn: "9781788623872",
title: "Learning JavaScript Data Structures and Algorithms",
author: "Loiane Groner",
published: "2018-04-26T00:00:00.000Z",});

console.log(books);

function formatandoData(objeto) {
    objeto.forEach(({ published }) => {
      data = published.replace("T00:00:00.000Z", "");
      dataPtBr = data.split("-").reverse().join("/");
      return console.log(dataPtBr);
    });
  }
  formatandoData(books);
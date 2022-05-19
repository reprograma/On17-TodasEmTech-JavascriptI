function mapeandoLivros(objeto) {
    const livrosMapeados = objeto.map(({ title, author, published }) => {
      return { title, author, published };
    });
    console.log(livrosMapeados);
  }
  mapeandoLivros(books);
  
  function removendoEsubstituindo(objeto) {
    objeto.splice(5, 1, {
      isbn: "9781788623872",
      title: "Learning JavaScript and Love It",
      author: "Loiane Groner",
      published: "2018-04-26T00:00:00.000Z",
    });
    return console.log(objeto);
  }
  removendoEsubstituindo(books);
  
  function formatandoData(objeto) {
    objeto.forEach(({ published }) => {
      data = published.replace("T00:00:00.000Z", "");
      dataPtBr = data.split("-").reverse().join("/");
      return console.log(dataPtBr);
    });
  }
  formatandoData(books);
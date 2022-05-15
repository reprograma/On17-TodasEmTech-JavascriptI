// 1º Desafio : Biblioteca
// Com base no array books, vocês devem:

// Criar uma função que exiba no console.log() as propriedades título, autor e published. OBS: pense sobre a exibição dos dados. O que é mais válido ao usuário: dispor essas apenas essas informações na tela, ou trazê-las de forma organizada?

// Criar uma função que remova o objeto localizado no quinto index, colocando no lugar o seguinte objeto:

// {
//    isbn: "9781788623872",
//    title: "Learning JavaScript Data Structures and Algorithms",
//    author: "Loiane Groner",
//    published: "2018-04-26T00:00:00.000Z",
// }
// Opcional: Criar uma função que trate as datas salvas na chave published, trazendo no console.log() os valores contendo apenas as datas no formato pt-br.

function library() {
  const books = [
    {
      isbn: '9781712323872',
      title: 'Harry Potter',
      author: 'Hermione',
      published: '2018-04-26T00:00:00.000Z',
    },
    {
      isbn: '9781712323872',
      title: 'Harry Potter',
      author: 'Hermione',
      published: '2018-04-26T00:00:00.000Z',
    },
    {
      isbn: '9781712323872',
      title: 'Harry Potter',
      author: 'Hermione',
      published: '2018-04-26T00:00:00.000Z',
    },
    {
      isbn: '9781712323872',
      title: 'Harry Potter',
      author: 'Hermione',
      published: '2018-04-26T00:00:00.000Z',
    },
    {
      isbn: '9781712323872',
      title: 'Harry Potter',
      author: 'Hermione',
      published: '2018-04-26T00:00:00.000Z',
    },
    {
      isbn: '9781712323872',
      title: 'Harry Potter',
      author: 'Hermione',
      published: '2018-04-26T00:00:00.000Z',
    },
    {
      isbn: '9781712323872',
      title: 'Harry Potter',
      author: 'Hermione',
      published: '2018-04-26T00:00:00.000Z',
    },
  ];

  // books[5] = {
  //   isbn: '9781788623872',
  //   title: 'Learning JavaScript Data Structures and Algorithms',
  //   author: 'Loiane Groner',
  //   published: '2018-04-26T00:00:00.000Z',
  // };

  books.forEach((book, index) => {
    const { title, author, published } =
      index !== 5
        ? book
        : {
            isbn: '9781788623872',
            title: 'Learning JavaScript Data Structures and Algorithms',
            author: 'Loiane Groner',
            published: '2018-04-26T00:00:00.000Z',
          };

    console.log(
      `O livro ${title} do autor ${author}, foi publicado no dia ${new Date(
        published
      ).toLocaleDateString('pt-BR')}.`
    );
  });
}
library();

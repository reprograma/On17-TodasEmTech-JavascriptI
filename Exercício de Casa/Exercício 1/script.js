const books = [
    {
        isbn: "9781593275846",
        title: "Eloquent JavaScript, Second Edition",
        author: "Marijn Haverbeke",
        published: "2014-12-14T00:00:00.000Z",
    },
    {
        isbn: "9781449331818",
        title: "Learning JavaScript Design Patterns",
        author: "Addy Osmani",
        published: "2012-07-01T00:00:00.000Z",
    },
    {
        isbn: "9781449365035",
        title: "Speaking JavaScript",
        author: "Axel Rauschmayer",
        published: "2014-02-01T00:00:00.000Z",
    },
    {
        isbn: "9781491950296",
        title: "Programming JavaScript Applications",
        author: "Eric Elliott",
        published: "2014-07-01T00:00:00.000Z",
    },
    {
        isbn: "9781593277574",
        title: "Understanding ECMAScript 6",
        author: "Nicholas C. Zakas",
        published: "2016-09-03T00:00:00.000Z",
    },
    {
        isbn: "9781491904244",
        title: "You Don't Know JS",
        author: "Kyle Simpson",
        published: "2015-12-27T00:00:00.000Z",
    },
    {
        isbn: "9781449325862",
        title: "Git Pocket Guide",
        author: "Richard E. Silverman",
        published: "2013-08-02T00:00:00.000Z",
    },
    {
        isbn: "9781449337711",
        title: "Designing Evolvable Web APIs with ASP.NET",
        author: "Glenn Block, et al.",
        published: "2014-04-07T00:00:00.000Z",
    }
]

/*1. Criar uma função que exiba no `console.log()` as propriedades `título`, `autor` e 
`published`. *OBS:* pense sobre a exibição dos dados. O que é mais válido ao usuário: 
dispor essas apenas essas informações na tela, ou trazê-las de forma organizada?)*/

function filterProperties(obj) {
    let booksFiltered = obj.map((book) => [
      `title: ${book.title}`,
      `author: ${book.author}`,
      `published: ${book.published}`,
    ]);
  
    console.log(booksFiltered);
  }
  
  filterProperties(books);


/*2. Criar uma função que remova o objeto localizado no quinto index, colocando no lugar 
o seguinte objeto:

   ```JavaScript
   { 
      isbn: "9781788623872",
      title: "Learning JavaScript Data Structures and Algorithms",
      author: "Loiane Groner",
      published: "2018-04-26T00:00:00.000Z",
   } */

   function removeObject(obj) {
    obj.splice(5, 1, {
      isbn: "9781788623872",
      title: "Learning JavaScript Data Structures and Algorithms",
      author: "Loiane Groner",
      published: "2018-04-26T00:00:00.000Z",
    });
    console.log(books);
  }



   /*3. **Opcional:** Criar uma função que trate as datas salvas na chave `published`, 
trazendo no `console.log()` os valores contendo apenas as datas no formato `pt-br`.
*/
   function dateFormat(obj) {
    obj.forEach[(item) => {
        let data = item.published.replace("T00:00:00.00Z", "");
        let dataFormatada = data.split("-").reverse().join("/");
        return console.log(dataFormatada);
    }];
   }


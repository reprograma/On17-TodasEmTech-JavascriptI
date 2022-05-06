# Desafio: Biblioteca

---
## Instruções para a realização do projeto:

1. Entre no repositório aqui mencionado (https://github.com/reprograma/On17-TodasEmTech-JavascriptI).

2. **Forkem o repositório para a conta pessoal de vocês**.

3. **Clonem no computador de vocês o repositório forkado em suas contas particulares**.

```
git clone [nome-do-repositorio-forkado-em-sua-conta-particular-no-GitHub]
```

**_ATENÇÃO_: Não modifiquem o conteúdo do projeto original forkado, apenas a que você copiou e renomeou!**

4. Crie uma `branch` com o seu nome

```
git checkout -b "seu-nome"`
```

5. Entrem na branch criada e resolva o desafio proposto. Para verificar em qual branch voce está:

```
git branch
```

Se estiver na master...

```
git checkout "seu-nome"
```

6. Ao finalizar a resolução do desafio proposto, façam o `commit` e o `push` da branch criada para a master do projeto que vocês forkaram em suas contas particulares.
(Verifique que você está na sua branch)

```
git add .
git commit -m "texto do seu commit"
git push origin master
```

7. Em *Settings*, desçam a página até o submenu *GitHub Pages*, e clique em *Check it out here*.
   
   ![settings](../assets/settings-github.png)

   ![github-pages-link](../assets/github-pages-link.png)

8. Em Github Pages, selecione em *source* a branch `main` e apertem em save.

![github-pages](../assets/githubpages-source-selection.png)

9. Enviem o link do GitHub do projeto que vocês forkaram em suas contas particulares.

---

## 1. Introdução

Vocês estão atuando como *freelancers* em um projeto para uma biblioteca.

O cliente pediu para que vocês desenvolvessem uma página onde é possível **(i)** inserir informações relevantes sobre novos livros adquiridos pela biblioteca, e **(ii)** visualizar as informações dos livros que foram inseridos anteriormente no sistema.

O cliente forneceu um array - `let books` - que contém alguns títulos que ele deseja ver exibidos na tela;

## 2. Detalhes Técnicos do Projeto:

A tela inicial deve conter duas partes essenciais:

- um formulário para inserção das informações dos livros:

![project](./../assets/screenshotproject.png)

- uma listagem dos livros que forem adicionados pelo usuário.

![listagem](./../assets/listagemlivros.png)

## 3. Tecnologias Utilizadas:

- HTML;
- CSS;
- *Vanilla.js*: não será permitida a utilização de bibliotecas nesse projeto.

## 4. Critérios Técnicos do Projeto:

1. O formulário de inserção dos livros continuará contendo os seguintes campos obrigatórios: **Autor, Título, ISBN e Data de Publicação**. Contudo, sintam-se à vontade para inserirem novos campos no formulário caso prefiram.

2. Um livro não pode ser adicionado sem as informações obrigatórias acima mencionadas *(Autor, Título, ISBN e Data de Publicação)*. Logo, o seu código deve prever um tratamento de erro, informando ao usuário a necessidade de preencher as informações obrigatórias faltantes.

3. **No trecho responsável por listar os livros, deverá ser iterado o array `books` de forma a exibir na tela o acervo de livros disponibilizado pelo cliente. Esse array está declarado no arquivo `script.js`**.

4. Ao clicar no botão responsável por adicionar o livro, **as informações agora devem ser imediatamente inseridas no array `books.js` e visualizadas na listagem localizada abaixo do formulário**.

5. Na propriedade *published* do array `books.js`, constam as datas e horários em que os livros foram publicados. **Essa propriedade deve ser tratada usando o objeto Date() para que seja exibida na listagem apenas a data**.

6. O livro adicionado poderá ser deletado pelo usuário.

7. É preciso seguir a estrutura de repositório contida nessa pasta "Exercício de Casa".

8. *Estilização*: o estilo dos prints colocados acima são apenas sugestões; a estilização da página fica a critério da aluna. O CSS deve ser Responsivo.

## 5. Itens Adicionais e não Obrigatórios do Projeto: 

1. Permanência dos Dados: encontrar um meio para que as informações permaneçam na tela do usuário mesmo após a atualização da página.

## 6. Links Úteis:

**Sobre iteração de array e inserção de dados em um array:**

https://www.youtube.com/watch?v=vLfqrEP6weo

**Sobre eventuais erros na inserção de datas:**

https://www.w3schools.com/js/tryit.asp?filename=tryjs_date_ahead
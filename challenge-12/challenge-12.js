( function (){
    /*
    Envolva todo o conteúdo desse arquivo em uma IIFE.
    */

    /*
    Crie um objeto chamado `person`, com as propriedades:
        `name`: String
        `lastname`: String
        `age`: Number
    Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
    de valor para cada propriedade.
    */
    var person = {
        name: 'Erika',
        lastname: 'Carvalho',
        age: 22
    }
    console.log( 'Propriedades de "person":', person );

    /*
    Mostre no console, em um array, todas as propriedades do objeto acima.
    Não use nenhuma estrutura de repetição, nem crie o array manualmente.
    */
    console.log(Object.keys(person));

    /*
    Crie um array vazio chamado `books`.
    */
    var books = [];

    /*
    Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
    seguintes propriedades:
    `name`: String
    `pages`: Number
    */
    
    books = [
        {
            name: 'Livro 1',
            pages: 400
        },
        {
            name: 'Livro 2',
            pages: 600
        },
        {
            name: 'Livro 3',
            pages: 100
        }
    ]
    /*
    Mostre no console todos os livros.
    */
    console.log( '\nLista de livros:', books );

    /*
    Remova o último livro, e mostre-o no console.
    */
   console.log( '\nLivro que está sendo removido:', books.push() );

   /*
    Mostre no console os livros restantes.
    */
    console.log( '\nAgora sobraram somente os livros:', books );

    /*
    Converta os objetos que ficaram em `books` para strings.
    */
    
    console.log( '\nLivros em formato string:', JSON.stringify(books) );

    /*
    Mostre os livros nesse formato no console:
    */
    // ?

    /*
    Converta os livros novamente para objeto.
    */
    // ?
    console.log( '\nAgora os livros são objetos novamente:' , JSON.parse(books[1]));

    /*
    Mostre no console todas as propriedades e valores de todos os livros,
    no formato abaixo:
        "[PROPRIEDADE]: [VALOR]"
    */
    console.log(books);

    /*
    Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
    seu nome. Adicione seu nome completo no array.
    */
    var myName = ['E', 'r', 'i', 'k', 'a'];

    /*
    Juntando todos os itens do array, mostre no console seu nome.
    */
    console.log( '\nMeu nome é:', myName.join('') );

    /*
    Ainda usando o objeto acima, mostre no console seu nome invertido.
    */
   myName.reverse();
   console.log( '\nMeu nome invertido é:', myName.join('') );

    /*
    Mostre todos os itens do array acima, odenados alfabéticamente.
    */

    console.log( '\nAgora em ordem alfabética:', myName.sort() );
})();

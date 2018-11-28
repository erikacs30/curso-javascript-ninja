/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myInfos = ['Erika', 'Carvalho', 22, true, 'Frot-end dev'];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function recebeArray (array) {
    return array;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(recebeArray(myInfos)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function recebeArrayIndice (array, indice) {
    return array[indice];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var newArray = ['string', 1, true, null, undefined]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
recebeArray(newArray);

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(nome) {
    var obj = {
           'Livro 1': {
                quantidadePaginas: 100,
                autor: 'Fulano',
                editora: 'Códigos1000'
           },
           'Livro 2 - O retorno': {
                quantidadePaginas: 150,
                autor: 'Fulano',
                editora: 'Códigos1000'
           },
           'Livro 3 - Cansaram de mim?': {
                quantidadePaginas: 500,
                autor: 'Fulano',
                editora: 'Códigos1000'
           }
        }

    return nome ? obj[nome] : obj;
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var bookName = 'Livro 1';
console.log('O livro ' + bookName + ' tem ' + book(bookName).quantidadePaginas + ' páginas!' );

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro ' + bookName + ' é ' + book(bookName).autor + '.' );

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro ' + bookName + ' foi publicado pela editora ' + book(bookName).editora + '.' );

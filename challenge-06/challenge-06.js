/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
var championship = 'Brasileirão';
console.log(championship);

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
var teams = ['Corinthians', 'São Paulo', 'Palmeiras', 'Santos', 'Chapecoense'];

console.log( 'Times que estão participando do campeonato:', teams );

/*
Crie uma função chamada `showTeamPosition` com as seguintes características:
    - A função deve receber um número por parâmetro;
    - A função deve retornar a frase:
    "O time que está em [POSIÇÃO]º lugar é o [NOME DO TIME].";
    - Onde [POSIÇÃO] é o valor passado por parâmetro e [NOME DO TIME] é o time
    que está nessa posição no array criado acima com os nomes dos times.
    --------------
    Dica: lembre-se que arrays começam no índice zero, então a posição passada
    deve ser sempre um número a mais que o índice do array ;)
    --------------
    - A função só deve retornar a frase acima somente se o time estiver entre
    os 5 primeiros.
    - Se não houver time para a posição passada, deve retornar a mensagem:
    "Não temos a informação do time que está nessa posição."
*/

function showTeamPosition(position) {
    if (position > 0 || position <= 5) { 
        return 'O time que está em ' + position + 'º lugar é o ' + teams[position - 1] + '.';
    }
    return 'Não temos a informação do time que está nessa posição.';
}

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
showTeamPosition(1); // "O time que está em 1º lugar é o Corinthians."
showTeamPosition(6); // "Não temos a informação do time que está nessa posição."
showTeamPosition(3); // "O time que está em 3º lugar é o Palmeiras."
showTeamPosition(2); // "O time que está em 2º lugar é o São Paulo."


/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
var contador = 0;
while (contador <= 30) {
    console.log(contador);
    contador++;
}

/*
Crie uma função chamada `convertToHex`, com as seguintes características:
    - A função recebe uma cor por parâmetro, do tipo string. Exemplo: "red";
    - Escolha 5 cores que serão convertidas do nome da cor para o seu
    equivalente hexadecimal (pode ser qualquer tom);
    - Usando a estrutura switch, verifique se a cor passada por parâmetro é
    algum hexa escolhido. Se for, retorne a frase:
    "O hexadecimal para a cor [COR] é [HEXADECIMAL].";
    - Se a cor passada por parâmetro não estiver entre as selecionadas, mostre
    a frase:
    "Não temos o equivalente hexadecimal para [COR]."
*/
function convertToHex(cor) {
    var hexa;
    switch (cor) {
    case 'red':
        hexa = '#FF4040';
        break;
    case 'blue':
        hexa = '#4040FF';
        break;
    case 'magenta':
        hexa = '#FF00FF';
        break;
    case 'green':
        hexa = '#40FF40';
        break;
    case 'grey':
        hexa = '#666666';
        break;
    default:
        return 'Não temos o equivalente hexadecimal para ' + cor + '.';
        break;
    };
    return 'O hexadecimal para a cor ' + cor + ' é ' + hexa + '.';
}

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
console.log(convertToHex('red')); // "O hexadecimal para a cor red é #FF4040."
console.log(convertToHex('green')); // "O hexadecimal para a cor green é #40FF40."
console.log(convertToHex('cyan')); // "Não temos o equivalente hexadecimal para cyan."
console.log(convertToHex('grey')); // "O hexadecimal para a cor grey é #666666."
console.log(convertToHex('magenta')); // "O hexadecimal para a cor magenta é #FF00FF."
console.log(convertToHex('blue')); // "O hexadecimal para a cor blue é #4040FF."
console.log(convertToHex('orange')); // "Não temos o equivalente hexadecimal para orange."
console.log(convertToHex('yellow')); // "Não temos o equivalente hexadecimal para yellow."
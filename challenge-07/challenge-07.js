/*
Crie um array com 5 items (tipos variados).
*/
var myArray = [1, 'dois', true, {tres: 3}, [1, 2, 3]];
/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addItem (item) {
    myArray.push(item);
    return myArray;
}
 
/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
console.log(addItem([0, 'oi', false]));

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
var qtd = myArray.length;
console.log('O segundo elemento do segundo array é ' + myArray[qtd - 1][1]);

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log('O primeiro array tem ' + qtd + ' itens.');

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log('O segundo array tem ' + myArray[qtd - 1].length + ' itens.');

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
console.log( 'Números pares entre 10 e 20:' );
var contador = 10;
while (contador >= 10 && contador <= 20) {
    if (contador % 2 === 0) {
        console.log(contador);
    }
    contador++;
}

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
console.log( 'Números ímpares entre 10 e 20:' );
var contadorImpar = 10;
while (contadorImpar >= 10 && contadorImpar <= 20) {
    if (contadorImpar % 2 !== 0) {
        console.log(contadorImpar);
    }
    contadorImpar++;
}

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log( 'Números pares entre 100 e 120:' );
for (contFor = 100; contFor <= 120; contFor++) {
    if (contFor % 2 === 0) {
        console.log(contFor);
    }
}

console.log( 'Números ímpares entre 111 e 125:' );
for (contForImpar = 111; contForImpar <= 125; contForImpar++) {
    if (contForImpar % 2 !== 0) {
        console.log(contForImpar);
    }
}

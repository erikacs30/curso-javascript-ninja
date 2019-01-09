(function( doc, win ) {
    'use strict';
/*
    Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
    As regras são:

    * Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
    diretamente;
    * O input deve iniciar com valor zero;
    * Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
    * Deve haver 4 botões para as operações principais: soma (+), subtração(-),
    multiplicação(x) e divisão(÷);
    * Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
    que irá limpar o input, deixando-o com valor 0;

    * A cada número pressionado, o input deve atualizar concatenando cada valor
    digitado, como em uma calculadora real;
    * Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
    operação no input. Se o último caractere no input já for um símbolo de alguma
    operação, esse caractere deve ser substituído pelo último pressionado.
    Exemplo:
    * Se o input tem os valores: "1+2+", e for pressionado o botão de
    multiplicação (x), então no input deve aparecer "1+2x".
    - Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
    input;
    * Ao pressionar o botão "CE", o input deve ficar zerado.
    */

    var operatorsArr,
        numbersArr,
        input = doc.querySelector('[data-js="input-read"]'),
        number = doc.querySelectorAll('[data-js="number"]'),
        buttonOperator = doc.querySelectorAll('[data-js="operators"]'),
        buttonResult = doc.querySelector('[data-js="result"]'),
        buttonReset = doc.querySelector('[data-js="reset"]'),
        operators = {
        '+': '+',
        '-': '-',
        'x': '*',
        '÷': '/'
        };
    
    number.forEach ( function( item ) {
        item.addEventListener('click', showNumber, false);
    });
    buttonOperator.forEach ( function( item ) {
        item.addEventListener('click', showOperator, false);
    });
    buttonResult.addEventListener('click', showResult, false);
    buttonReset.addEventListener('click', resetCalc, false);

    function showNumber () {
        input.value =  input.value === '0' ? this.value : input.value.concat(this.value);
    }

    function showOperator() {
        if (input.value === '0')
            this.value === '-' ? input.value =  this.value : alert('Insira um número');
        else {
            var inputValue = input.value,
                inputLastChar = inputValue.charAt(inputValue.length - 1);

            if (Object.keys(operators).indexOf(inputLastChar) !== -1)
                inputValue = inputValue.slice(0, -1);

            input.value = inputValue.concat(this.value);
        }
    }

    function showResult() {
        console.log('Estamos calculando o resultado...');
        operatorsArr = input.value.split(/(\d+)/g);
        //numbersArr = input.value.split(/\D/g);
        // operatorsArr.splice(-1,1);
        //console.log(numbersArr);

        if (operatorsArr[0] === "") {
            operatorsArr.splice(0, 1);
            operatorsArr.reduce(function (accumulated, actual, index) {
                if (actual.match(/\D/)) {
                    console.log(typeof(parseInt(operators[actual])));
                    console.log(parseInt((accumulated + operators[actual] + operatorsArr[index + 1])));
                }
                
            });
        }
        // operatorsArr.reduce (function (acumulado, item, index) {
        //     var operatorJS = operators[item];
        //     console.log(operatorJS + ' ' + numbersArr[index] + ' ');
        //     console.log('item', numbersArr[index - 1]);
        // })
    }

    function resetCalc() {
        input.value = 0;
    }
})(document, window);
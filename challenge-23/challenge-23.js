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
        visor = doc.querySelector('[data-js="visor"]'),
        buttonNumber = doc.querySelectorAll('[data-js="number"]'),
        buttonOperator = doc.querySelectorAll('[data-js="operators"]'),
        buttonResult = doc.querySelector('[data-js="result"]'),
        buttonReset = doc.querySelector('[data-js="reset"]'),
        operators = {
        '+': '+',
        '-': '-',
        'x': '*',
        '÷': '/'
        };
    
    buttonNumber.forEach ( function( button ) {
        button.addEventListener('click', handleClickNumber, false);
    });
    buttonOperator.forEach ( function( button ) {
        button.addEventListener('click', handleClickOperation , false);
    });
    buttonResult.addEventListener('click', handleClickResult, false);
    buttonReset.addEventListener('click', handleClickCE, false);

    function handleClickNumber () {
        console.log(visorHasZero(this));
        if(!visorHasZero(this))
            console.log(visorHasZero(this.value));
            visor.value += this.value;
        // visor.value =  visor.value === '0' ? this.value : visor.value.concat(this.value);
    }

    function visorHasZero(button) {
        return visor.value === '0' ? visor.value =  button.value : false;
    }

    function handleClickOperation () {
        if (visor.value === '0')
            this.value === '-' ? visor.value =  this.value : alert('Insira um número');
        else {
            // var visorValue = visor.value,
            //     visorLastChar = visorValue.charAt(visorValue.length - 1);

            // if (Object.keys(operators).indexOf(visorLastChar) !== -1)
            //     visorValue = visorValue.slice(0, -1);

            // visor.value = visorValue.concat(this.value);

            visor.value = removeLastItemIfItsOperator ( visor.value );
            visor.value += this.value;
        }
    }

    function isLastItemOperator ( number ) {
        var operationsArr = ['+', '-', 'x', '÷'];
        var lastItem = number.split('').pop();
        return operationsArr.some(function(operator){
            return operator === lastItem;
        });
    }

    function removeLastItemIfItsOperator ( number ) {
        if (isLastItemOperator(number))
            return number.slice(0, -1);
        return number;
    }

    function handleClickResult() {
        visor.value = removeLastItemIfItsOperator(visor.value);
        var allValues = visor.value.match(/\d+[+x÷-]?/g);

        visor.value = allValues.reduce(function(accumulated, actual){
            var firstValue = accumulated.slice(0, -1);
            var operator = accumulated.split('').pop();
            var lastValue = removeLastItemIfItsOperator(actual);
            var lastOperator = isLastItemOperator(actual) ? actual.split('').pop() : '';

            switch (operator) {
                case '+':
                    return (Number(firstValue) + Number(lastValue) + lastOperator);
                case '-':
                    return (Number(firstValue) - Number(lastValue) + lastOperator);
                case 'x':
                    return (Number(firstValue) * Number(lastValue) + lastOperator);
                case '÷':
                    return (Number(firstValue) / Number(lastValue) + lastOperator);
            }
        });
    }

    function handleClickCE() {
        visor.value = 0;
    }
})(document, window);
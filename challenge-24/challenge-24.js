(function( doc, win ) {
  'use strict';
  
  /*
  Nossa calculadora agora está funcional! A ideia desse desafio é modularizar
  o código, conforme vimos na aula anterior. Quebrar as responsabilidades
  em funções, onde cada função faça somente uma única coisa, e faça bem feito.

  - Remova as duplicações de código;
  - agrupe os códigos que estão soltos em funções (declarações de variáveis,
  listeners de eventos, etc);
  - faça refactories para melhorar esse código, mas de forma que o mantenha com a
  mesma funcionalidade.
  */
  var visor = doc.querySelector('[data-js="visor"]'),
      buttonNumber = doc.querySelectorAll('[data-js="number"]'),
      buttonOperator = doc.querySelectorAll('[data-js="operators"]'),
      buttonResult = doc.querySelector('[data-js="result"]'),
      buttonReset = doc.querySelector('[data-js="reset"]');

  function initialize() {
    initEvents();
  }

  function initEvents () {
    buttonNumber.forEach ( function( button ) {
      button.addEventListener('click', handleClickNumber, false);
    });
    buttonOperator.forEach ( function( button ) {
      stringbutton.addEventListener('click', handleClickOperation , false);
    });
    buttonResult.addEventListener('click', handleClickResult, false);
    buttonReset.addEventListener('click', handleClickCE, false);
  } 

  function handleClickCE() {
    visor.value = 0;
  }

  function handleClickNumber () {
    visor.value === '0' ? visor.value =  button.value : false;
  }

  function handleClickOperation () {
    if (visor.value === '0')
      this.value === '-' ? visor.value =  this.value : alert('Insira um número');
    else {
      visor.value = removeLastItemIfItsOperator ( visor.value );
      visor.value += this.value;
    }
  }

  function handleClickResult() {
    visor.value = removeLastItemIfItsOperator(visor.value);
    var allValues = visor.value.match(getRegexOperations());
    visor.value = allValues.reduce(calculateAllValues); // Programação funcional é quando consegue passar uma função como parâmetro para outra função
  }

  function getRegexOperations() {
    return new RegExp('\\d+[' + getOperations().join('') + ']?', 'g');
  }

  function getOperations () {
    return Array.prototype.map.call(buttonOperator, function (button) {
      return button.value;
    })
  }

  function calculateAllValues(accumulated, actual){
    var firstValue = accumulated.slice(0, -1);
    var operator = accumulated.split('').pop();
    var lastValue = removeLastItemIfItsOperator(actual);
    var lastOperator = isLastItemOperator(actual) ? actual.split('').pop() : '';
    return doOperation(operator) + lastOperator;
  }

  function removeLastItemIfItsOperator ( string ) {
    if (isLastItemOperator(string))
      return string.slice(0, -1);
    return string;
  }

  function isLastItemOperator ( number ) {
    var operationsArr = getOperations();
    var lastItem = number.split('').pop(); // Split = quebra string em array ; Pop = retorna último item do array
    return operationsArr.some( function(operator) { // Some = passa pelos itens do array e algum deles precisa satisfazer determinada condição ; Every = todos precisam satisfazer condição
      return operator === lastItem;
    });
  }

  function doOperation(operator, firstValue, lastValue) {
    switch (operator) {
      case '+':
          return (Number(firstValue) + Number(lastValue));
      case '-':
          return (Number(firstValue) - Number(lastValue));
      case 'x':
          return (Number(firstValue) * Number(lastValue));
      case '÷':
          return (Number(firstValue) / Number(lastValue));
    }
  }

  initialize();
    
})(document, window);
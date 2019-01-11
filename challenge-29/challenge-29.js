(function(doc, DOM) {
  'use strict';

  /*
  Vamos estruturar um pequeno app utilizando módulos.
  Nosso APP vai ser um cadastro de carros. Vamos fazê-lo por partes.
  A primeira etapa vai ser o cadastro de veículos, de deverá funcionar da
  seguinte forma:
  - No início do arquivo, deverá ter as informações da sua empresa - nome e
  telefone (já vamos ver como isso vai ser feito)
  * Ao abrir a tela, ainda não teremos carros cadastrados. Então deverá ter
  um formulário para cadastro do carro, com os seguintes campos:
    - Imagem do carro (deverá aceitar uma URL)
    - Marca / Modelo
    - Ano
    - Placa
    - Cor
    - e um botão "Cadastrar"

  Logo abaixo do formulário, deverá ter uma tabela que irá mostrar todos os
  carros cadastrados. Ao clicar no botão de cadastrar, o novo carro deverá
  aparecer no final da tabela.

  Agora você precisa dar um nome para o seu app. Imagine que ele seja uma
  empresa que vende carros. Esse nosso app será só um catálogo, por enquanto.
  Dê um nome para a empresa e um telefone fictício, preechendo essas informações
  no arquivo company.json que já está criado.

  Essas informações devem ser adicionadas no HTML via Ajax.

  Parte técnica:
  Separe o nosso módulo de DOM criado nas últimas aulas em
  um arquivo DOM.js.

  E aqui nesse arquivo, faça a lógica para cadastrar os carros, em um módulo
  que será nomeado de "app".
  */

  function app() {
    var $companyName = new DOM ('[data-js="company-name"]');
    var $companyPhone = new DOM ('[data-js="company-phone"]');
    var $submitButton = new DOM ('[data-js="btn-submit"]');
    var ajax = new XMLHttpRequest();

    ajax.open('GET', './company.json');
    ajax.send();

    ajax.addEventListener('readystatechange', handleStateChange, false);
    $submitButton.get()[0].addEventListener('click', handleSubmit, false);

    function handleStateChange () {
      var response;
      if (isRequestOK()) {
        try {
          response = JSON.parse(ajax.responseText);
          setContent(response);
        }
        catch (e) {
          console.log(e);
        }
      }
    }
    function setContent ( response ) {
      $companyName.get()[0].textContent = response.name;
      $companyPhone.get()[0].textContent = response.phone;
    }
  
    function isRequestOK() {
      return ajax.readystate === 4 || ajax.status === 200;
    }

    function handleSubmit (event) {
      event.preventDefault();
      var $table = new DOM('[data-js="cars"]');
      var $inputImagem = new DOM('[data-js="input-img"]');
      var $inputMarca = new DOM('[data-js="input-marca"]');
      var $inputPlaca = new DOM('[data-js="input-placa"]');
      var $inputCor = new DOM('[data-js="input-cor"]');

      console.log($table.get()[0]);
      
      // $inputImagem = $inputImagem.get()[0].textContent;
      // $inputMarca = $inputImagem.get()[0].textContent;
      // $inputPlaca = $inputImagem.get()[0].textContent;
      // $inputCor = $inputImagem.get()[0].textContent;
      $table.get()[0].appendChild('<tr><td><img style="max-width: 200px" src="' + $inputImagem.value + '" /></td><td>' + $inputMarca.value + '</td><td>' + $inputPlaca.value + '</td><td>' + $inputCor.value + '</td></tr>')
    }

  }


  app();
})(document, window.DOM);

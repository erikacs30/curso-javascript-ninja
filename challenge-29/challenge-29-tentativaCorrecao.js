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

  var app = (function appFn() {
    return  {
      init: function init () {
        this.initEvents();
        this.companyInfo();
      },
      initEvents: function initEvents() {
        console.log('oi');
        DOM('[data-js="form-cars"]').get().on('submit', this.handleSubmit);
      },
      companyInfo: function companyInfo() {
        var ajax = new XMLHttpRequest();
        ajax.open('GET', './company.json', true);
        ajax.send();
        ajax.addEventListener('readystatechange', this.getCompanyInfo, false);
        
       

      },
      getCompanyInfo: function getCompanyInfo() {
        if (!app.isReady.call(this)) 
          return;
        var data = JSON.parse(this.responseText);
        var $companyName = new DOM('[data-js="company-name"]').get();
        var $companyPhone = new DOM('[data-js="company-phone"]').get();
        $companyName.textContent = data.name;
        $companyPhone.textContent = data.phone;
      },
      isReady: function isReady() {
        return this.readystate === 4 || this.status === 200;
      },
      createNewCar: function createNewCar() {
        var fragment = doc.createDocumentFragment();
        var tr = doc.createElement('tr');
        var tdImg = doc.createElement('td');
        var tdMarca = doc.createElement('td');
        var tdPlaca = doc.createElement('td');
        var tdCor = doc.createElement('td');
 
        tdImage.textContent = new DOM('[data-js="input-img"]').get().value;
        tdMarca.textContent = new DOM('[data-js="input-marca"]').get().value;
        tdPlaca.textContent = new DOM('[data-js="input-placa"]').get().value;
        tdCor.textContent = new DOM('[data-js="input-cor"]').get().value;

        tr.appendChild(tdImage);
        tr.appendChild(tdMarca);
        tr.appendChild(tdPlaca);
        tr.appendChild(tdCor);
      },
      handleSubmit: function handleSubmit(event) {
        event.preventDefault();
        var $table = new DOM('[data-js="cars"]').get();
        $table.appendChild(app.createNewCar());
      }
    }; 


  })();


  app.init();
})(document, window.DOM);

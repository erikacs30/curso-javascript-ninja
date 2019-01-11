(function(win, doc, DOM) {
  /*
    No HTML:
    * Crie um formulário com um input de texto que receberá um CEP e um botão
    de submit;
    * Crie uma estrutura HTML para receber informações de endereço:
    "Logradouro, Bairro, Estado, Cidade e CEP." Essas informações serão
    preenchidas com os dados da requisição feita no JS.
    * Crie uma área que receberá mensagens com o status da requisição:
    "Carregando, sucesso ou erro."

    No JS:
    * O CEP pode ser entrado pelo usuário com qualquer tipo de caractere, mas
    deve ser limpo e enviado somente os números para a requisição abaixo;
    * Ao submeter esse formulário, deve ser feito um request Ajax para a URL:
    "https://viacep.com.br/ws/[CEP]/json/", onde [CEP] será o CEP passado
    no input criado no HTML;
    * Essa requisição trará dados de um CEP em JSON. Preencha campos na tela
    com os dados recebidos.
    * Enquanto os dados são buscados, na área de mensagens de status, deve mostrar
    a mensagem: "Buscando informações para o CEP [CEP]..."
    * Se não houver dados para o CEP entrado, mostrar a mensagem:
    "Não encontramos o endereço para o CEP [CEP]."
    * Se houver endereço para o CEP digitado, mostre a mensagem:
    "Endereço referente ao CEP [CEP]:"
    - Utilize a lib DOM criada anteriormente para facilitar a manipulação e
    adicionar as informações em tela.
    */

    var $input = doc.querySelector('[data-js="input-cep"]');
    var $button = doc.querySelector('[data-js="btn-submit"]');
    var $statusField = doc.querySelector('[data-js="status"]');
    var $cepField = doc.querySelector('[data-js="CEP"]');
    var $ruaField = doc.querySelector('[data-js="logradouro"]');
    var $bairroField = doc.querySelector('[data-js="bairro"]');
    var $cidadeField = doc.querySelector('[data-js="cidade"]');
    var $estadoField = doc.querySelector('[data-js="estado"]');
    var ajax = new XMLHttpRequest();
    var responseCEP = '';
    
    function initialize () {
      initEvents();
    }

    function initEvents() {
      $button.addEventListener('click', function (e) {
        e.preventDefault();
        $statusField.innerHTML = 'Buscando CEP: ' + setCEPFormat($input.value);

        ajax.open('GET', 'http://apps.widenet.com.br/busca-cep/api/cep/' + setCEPFormat($input.value) + '.json');
        ajax.send();

        ajax.addEventListener('readystatechange', function(){
          if (isRequestOK()) {
            try {
              responseCEP = JSON.parse(ajax.responseText);
              if (responseCEP.status === 1) {
                setFieldsContent(responseCEP);
              } else 
                $statusField.innerHTML = 'Erro: ' + responseCEP.message;
            }
            catch (e) {
              $statusField.innerHTML = "Endereço referente ao CEP: "  + setCEPFormat($input.value) + ".";
              console.log(e);
            }
          }
        }, false);

      });
    }

    function isRequestOK() {
      return ajax.readystate === 4 || ajax.status === 200;
    }

    function setFieldsContent (ajaxResponse) {
      $statusField.innerHTML = "Não encontramos o endereço para o CEP "  + setCEPFormat($input.value) + ".";
      $cepField.innerHTML = ajaxResponse.code;
      $ruaField.innerHTML = ajaxResponse.address;
      $bairroField.innerHTML = ajaxResponse.district;
      $cidadeField.innerHTML = ajaxResponse.city;
      $estadoField.innerHTML = ajaxResponse.state;
    }

    function setCEPFormat (cep) {
      var cepArray = cep.split(/\D/g).join('').split('');
      cepArray.splice(cepArray.length - 3, 0, '-');
      return cepArray.join('');
    }

    initialize();

})(window, document, window.DOM);

$(document).on('click', '#salvar', function() {
  var parametros = {
    "nome": $('#nome').val(),
    "senha": $('#senha').val(),
    "email": $('#email').val()
  };

  $.ajax({
    type: "post", //Como vou enviar os dados
    url: "https://wordpress-online-2.000webhostapp.com/webservice/cadastra.php", //Para onde vou enviar os dados
    data: parametros, //O que eu vou enviar
    //Se der certo:
    success: function(data) {
      navigator.notification.alert(data);

      $('#nome').val('');
      $('#senha').val('');
      $('#email').val('');
    },
    //Se der errado:
    error: function(data) {
      navigator.notification.alert("Erro no cadastro.");
    }
  });
});
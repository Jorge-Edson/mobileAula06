
//ações de mudança de tela
$(document).on('click', '#listar', function() {
  $(location).attr("href", "listar.html");
});

//ações de banco
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

function listar() {
  $.ajax({
    type: "post",
    url: "https://wordpress-online-2.000webhostapp.com/webservice/listar.php",
    dataType: "json", //o que vou receber ou como vou receber
    success: function(data) {
      var itemLista = "";
      $.each(data.pessoas, function(i, dados) {
        itemLista += "<option value="+ dados.codigo +">"+ dados.nome +"</option>";
      });
      $('#listaPessoas').html(itemLista);
    },
    error: function(data) {
      navigator.notification.alert("Erro ao buscar registro.");
    }
  });
}

$(document).on('change', '#listaPessoas', function() {
  var parametros = {
    "codigo": $('option:selected', ('#listaPessoas')).val()
  }

  $.ajax({
    type: "post",
    url: "https://wordpress-online-2.000webhostapp.com/webservice/listar-um-registro.php",
    data: parametros,
    dataType: "json", //o que vou receber ou como vou receber
    success: function(data) {
      $('#codigo').val(data.pessoa.codigo);
      $('#nome').val(data.pessoa.nome);
      $('#email').val(data.pessoa.email);
      $('#senha').val(data.pessoa.senha);
    },
    error: function(data) {
      navigator.notification.alert("Erro ao buscar registro.");
    }
  });
});


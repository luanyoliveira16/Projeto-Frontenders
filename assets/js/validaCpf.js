

let cpfDoUsuario = $("#cpf").val();

$('#cpf').blur(function (cpf) {
    
    let Soma = 0;
    var Resto;

  if (cpfDoUsuario == "00000000000") return false;
    
  for (i=1; i<=9; i++) Soma = Soma + parseInt(cpfDoUsuario.substring(i-1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;
  
    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(cpfDoUsuario.substring(9, 10)) ) return false;
  
  Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(cpfDoUsuario.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;
  
    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(cpfDoUsuario.substring(10, 11) ) ) return false;
    return true;

    alert(TestaCPF(cpf));

});

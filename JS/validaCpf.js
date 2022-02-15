
let cpfTeste = $('#cpf-mask').blur(function () {

  let strCPF = $("#cpf-mask").val();
  let Soma = "";
  let Resto = "";
  if (strCPF == "00000000000") console.log("zero não");
  
  for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;
  
  if ((Resto == 10) || (Resto == 11))  Resto = 0;
  if (Resto != parseInt(strCPF.substring(9, 10)) ) ;
  // console.log(false);
  
  Soma = 0;
  for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
  Resto = (Soma * 10) % 11;
  
      if ((Resto == 10) || (Resto == 11))  Resto = 0;
      if (Resto != parseInt(strCPF.substring(10, 11) ) ) {
        alert("CPF Inválido!");
      }
})


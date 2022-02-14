// ainda nao está ok

function validaEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  

  console.log(validaEmail('texto@texto.com')); // true
  console.log(validaEmail('texto@texto')); // false
  console.log(validaEmail('texto.com')); // false
  console.log(validaEmail('texto'));

if(validaEmail == 'false'){
      alert('erro');
}
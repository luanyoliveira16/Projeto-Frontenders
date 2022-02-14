'use strict';

// função que limpa o Formulário
const limparForm = (endereco) => {
  document.getElementById('rua').value = '';
  document.getElementById('bairro').value = '';
  document.getElementById('cidade').value = '';
  document.getElementById('uf').value = '';
}

// Preenchendo o Formulário com a resposta da API
const preencherFormulario = (endereco) => {
  document.getElementById('rua').value = endereco.logradouro;
  document.getElementById('bairro').value = endereco.bairro;
  document.getElementById('cidade').value = endereco.localidade;
  document.getElementById('uf').value = endereco.uf;
}

// Pesquisando se o que foi digitado é número do início "ˆ" ao fim "$"" 
const eNumero = (numero) => /^[0-9]+$/.test(numero);
const cepValido = (cep) => cep.length == 8 && eNumero(cep);

// Fazendo a pesquisa no site viacep.com.br. Alterando como templateString o valor do cep.
const pesquisarCep = async () => {

  // Limpando o formulário
  limparForm();

  const cep = document.getElementById('cep').value;
  const url = `https://viacep.com.br/ws/${cep}/json/`;

  // Testando se cep foi digitado por numero
  if (cepValido(cep)) {
    const dados = await fetch(url);
    const endereco = await dados.json();

    // Testando se o CEP é válido na API
    if (endereco.hasOwnProperty('erro')) {
      document.getElementById('rua').value = 'CEP não encontrado!';
    } else {
      preencherFormulario(endereco);
      return true;
    }
  } else {
    document.getElementById('rua').value = 'CEP incorreto!';
  }

}
// Aplicando escuta para quando sair do foco`
document.getElementById('cep')
  .addEventListener('focusout', pesquisarCep);
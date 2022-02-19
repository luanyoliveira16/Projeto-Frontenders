//Direcionamento das páginas

//From Page Home(INDEX) for Login
$('#login2').on('click', function () {
    window.location.href = './HTML/page-login.html';
});

//From Pages for Login
$('#login').on('click', function () {
    window.location.href = 'page-login.html';
});

//From Pages for Home
$('#home').on('click', function () {
    window.location.href = '/index.html';
});

//From Page Produtos for Login
$('#sair').on('click', function () {
    window.location.href = 'page-login.html';
});

//From Produtos for Demo
$('#demo').on('click', function () {
    window.location.href = 'demo.html';
});

//From Page Redefinir for Login (validando o email)
$('#redsenha').on('click', function (event) {
    event.preventDefault();
    if (document.forms[0].email2.value == ""
        || document.forms[0].email2.value.indexOf('@') == -1
        || document.forms[0].email2.value.indexOf('.') == -1) {
        alert('Por favor, informe um Email válido!');

    } else {

        alert('Sua nova senha foi enviada para o seu email!')
        window.location.href = 'page-login.html';

    }
});

//From Page Login for Produto (validando o email)
$('#btn-login2').on('click', function (event) {
    event.preventDefault();
    if (document.forms[0].email3.value == ""
        || document.forms[0].email3.value.indexOf('@') == -1
        || document.forms[0].email3.value.indexOf('.') == -1) {
        alert('Por favor, informe um Email válido!');

    } else {

        alert('Login efetuado com sucesso!')
        window.location.href = 'page-produtos.html';
    }
});

//From Page Home for Contato
$('#contato2').on('click', function () {
    window.location.href = './HTML/contato.html';
});

//From Pages for Contato
$('#contato').on('click', function () {
    window.location.href = 'contato.html';
});

//From Home (INDEX) for Produtos
$('#produtos2').on('click', function () {
    window.location.href = './HTML/page-produtos.html';
});

//From Pages for Produtos
$('#produtos').on('click', function () {
    window.location.href = 'page-produtos.html';
});

//From Page Home (INDEX) for Cadastro
function cadastro2() {
    window.location.href = './HTML/page-cadastro.html'
};

//From Pages for Cadastro
function cadastro() {
    window.location.href = 'page-cadastro.html'
};

//From Page Login for Produtos
$('#btn-login').on('click', function () {
    window.location.href = 'page-produtos.html'
});

//From Page Login for Redefinir Senha
$('#redefinir').on('click', function () {
    window.location.href = 'page-forget-password.html'
});

//From Page Login for Cadastro
$('#cadastro').on('click', function () {
    window.location.href = 'page-cadastro.html';
});

//From Pages for Home (index)
// $('#home').on('click', function () {
//     window.location.href = './PROJETO-FRONTENDERS/index.html';
// });

//From Page Cadastro for Login
$('#btn-cadastro').on('click', function (event) {
    event.preventDefault();
    alert('Cadastro efetuado com sucesso!')
    window.location.href = 'page-login.html';
});

//From Page Contato for pages web dos desenvolvedores (Git hub)
$('#githubIza').on('click', function () {
    window.open('https://github.com/izadorafsantos')
});

$('#githubLuany').on('click', function () {
    window.open('https://github.com/luanyoliveira16')
});
$('#githubNilton').on('click', function () {
    window.open('https://github.com/NiltonCortesJr')
});
$('#githubSuelen').on('click', function () {
    window.open('https://github.com/suelenrechebrito')
});

//From Page Contato for pages web dos desenvolvedores (Linkedin)

$('#linkedinIza').on('click', function () {
    window.open('https://www.linkedin.com/in/izadora-ferreira-dos-santos-0504b2177/')
});
$('#linkedinLuany').on('click', function () {
    window.open('https://www.linkedin.com/in/luanyboliveira/')
});
$('#linkedinNilton').on('click', function () {
    window.open('https://www.linkedin.com/in/niltoncjr/')
});
$('#linkedinSuelen').on('click', function () {
    window.open('https://www.linkedin.com/in/suelen-reche-55a43a79/')
});


//**Adicionar icones das redes sociais dos desenvolvedores na Page Contato**//
const iconsIza = document.querySelector('.icons-iza');
const iconsLuany = document.querySelector('.icons-luany');
const iconsNilton = document.querySelector('.icons-nilton');
const iconsSuelen = document.querySelector('.icons-suelen');
const contato = document.querySelector('#contato');


$('#iza').on('click', function () {

    iconsIza.style.display = 'block'
    iconsLuany.style.display = 'none'
    iconsNilton.style.display = 'none'
    iconsSuelen.style.display = 'none'
    contato.style.color = '#A873BF'
    contato.innerText = 'Izadora Santos'
});

$('#luany').on('click', function () {

    iconsIza.style.display = 'none'
    iconsLuany.style.display = 'block'
    iconsNilton.style.display = 'none'
    iconsSuelen.style.display = 'none'
    contato.style.color = '#F2CB05'
    contato.innerText = 'Luany Oliveira'


})

$('#nilton').on('click', function () {

    iconsIza.style.display = 'none'
    iconsLuany.style.display = 'none'
    iconsNilton.style.display = 'block'
    iconsSuelen.style.display = 'none'
    contato.style.color = '#13678A'
    contato.innerText = 'Nilton Cortes Jr'

})

$('#suelen').on('click', function () {

    iconsIza.style.display = 'none'
    iconsLuany.style.display = 'none'
    iconsNilton.style.display = 'none'
    iconsSuelen.style.display = 'block'
    contato.style.color = '#F249B7'
    contato.innerText = 'Suelen Brito'


})



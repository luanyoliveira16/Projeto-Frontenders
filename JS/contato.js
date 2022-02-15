const btnIza = document.querySelector('#iza');
const btnLuany = document.querySelector('#luany');
const btnNilton = document.querySelector('#nilton');
const btnSuelen = document.querySelector('#suelen');

const iconsIza = document.querySelector('.icons-iza');
const iconsLuany = document.querySelector('.icons-luany');
const iconsNilton = document.querySelector('.icons-nilton');
const iconsSuelen = document.querySelector('.icons-suelen');
const contato = document.querySelector('#contato');


btnIza.addEventListener('click', function() {

  iconsIza.style.display = 'block'
  iconsLuany.style.display = 'none'
  iconsNilton.style.display = 'none'
  iconsSuelen.style.display = 'none'
  contato.style.color= '#A873BF'
  contato.innerText = 'Izadora Santos'
  


})

btnLuany.addEventListener('click', function() {

    iconsIza.style.display = 'none'
    iconsLuany.style.display = 'block'
    iconsNilton.style.display = 'none'
    iconsSuelen.style.display = 'none'
    contato.style.color = '#F2CB05'
    contato.innerText = 'Luany Oliveira'
  
  
  })

  btnNilton.addEventListener('click', function() {

    iconsIza.style.display = 'none'
    iconsLuany.style.display = 'none'
    iconsNilton.style.display = 'block'
    iconsSuelen.style.display = 'none'
    contato.style.color='#13678A'
    contato.innerText = 'Nilton Cortes'

  })

  btnSuelen.addEventListener('click', function() {

    iconsIza.style.display = 'none'
    iconsLuany.style.display = 'none'
    iconsNilton.style.display = 'none'
    iconsSuelen.style.display = 'block'
    contato.style.color='#F249B7'
    contato.innerText = 'Suelen Leao'
  
  
  })
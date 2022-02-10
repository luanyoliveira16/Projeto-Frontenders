const btnIza = document.querySelector('#iza');
const btnLuany = document.querySelector('#luany');
const btnNilton = document.querySelector('#nilton');
const btnSuelen = document.querySelector('#suelen');

const iconsIza = document.querySelector('.icons-iza');
const iconsLuany = document.querySelector('.icons-luany');
const iconsNilton = document.querySelector('.icons-nilton');
const iconsSuelen = document.querySelector('.icons-suelen');


btnIza.addEventListener('click', function() {

  iconsIza.style.display = 'block'
  iconsLuany.style.display = 'none'
  iconsNilton.style.display = 'none'
  iconsSuelen.style.display = 'none'


})

btnLuany.addEventListener('click', function() {

    iconsIza.style.display = 'none'
    iconsLuany.style.display = 'block'
    iconsNilton.style.display = 'none'
    iconsSuelen.style.display = 'none'
  
  
  })

  btnNilton.addEventListener('click', function() {

    iconsIza.style.display = 'none'
    iconsLuany.style.display = 'none'
    iconsNilton.style.display = 'block'
    iconsSuelen.style.display = 'none'
  
  
  })

  btnSuelen.addEventListener('click', function() {

    iconsIza.style.display = 'none'
    iconsLuany.style.display = 'none'
    iconsNilton.style.display = 'none'
    iconsSuelen.style.display = 'block'
  
  
  })
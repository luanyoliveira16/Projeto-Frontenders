var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
    loop: true
});

const toggleMenu = () => {
      const menuToggle = document.querySelector('.toggle')
      const navegation = document.querySelector('.navegation')
      menuToggle.classList.toggle('active')
      navegation.classList.toggle('active')
    }

//Plano Anual// 

const btnAnual = document.querySelector("#planoAnual");
const pplanoMensal1 = document.querySelector('.plano-mensal');
const valor1 = document.querySelector('.valor1');
const pplanoMensal2 = document.querySelector('.plano-mensal2');
const valor2 = document.querySelector('.valor2');
const pplanoMensal3 = document.querySelector('.plano-mensal3');
const valor3 = document.querySelector('.valor3');


btnAnual.addEventListener('click', function() {

   pplanoMensal1.innerText = 'Plano Anual' 
   valor1.innerText = ' 12x R$ 19,90'

   pplanoMensal2.innerText = 'Plano Anual'
   valor2.innerHTML = '12x R$ 36,90'

   pplanoMensal3.innerText = 'Plano Anual'
   valor3.innerText = '12x R$ 54,90'

})

//Plano Mensal//

const btnMensal =document.querySelector('#planoMensal');

btnMensal.addEventListener('click', function(){

   pplanoMensal1.innerText = 'Plano Mensal'
   valor1.innerText = 'R$ 24,90/mês'

   pplanoMensal2.innerText = 'Plano Mensal'
   valor2.innerText = 'R$ 49,90/mês'

   pplanoMensal3.innerText = 'Plano Mensal'
   valor3.innerText = 'R$ 74,90/mês'

})
// Swipper

var swiper = new Swiper('.swiper-container',{
  spaceBetween:30,
  centeredSlides: true,
 
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let menu = document.getElementById('menu-icon');
let navbar = document.querySelector('.navbar');


menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

 
}
const menu = document.getElementById("header-integra"); // colocar em cache
window.addEventListener("scroll", function () {
  
  if (window.scrollY > 0) {
    menu.classList.add("header-scroll");
    for (let i = 0; i < document.querySelectorAll(".header-link").length; i++) {
      
    }
  } else {
    menu.classList.remove("header-scroll");
    for (let i = 0; i < document.querySelectorAll(".header-link").length; i++) {
      
    }
  }
});

document.querySelector('.btn-home').style.opacity = "0"
window.addEventListener('scroll', function(){

const button = document.querySelector('.btn-home');
let scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollPosition > 100) {
    button.style.opacity = '1';
  }
  else {
    button.style.opacity = '0';
  }
  
});

const menuButton = document.querySelector('.menu-button');
const headerMenu = document.querySelector('.header-menu');

  menuButton.addEventListener('click', function() {
    headerMenu.classList.toggle('active');
  });



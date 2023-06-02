const menu = document.getElementById("home"); // colocar em cache
window.addEventListener("scroll", function () {
  
  if (window.scrollY > 0) {
    menu.classList.add("header-scroll");
    for (let i = 0; i < document.querySelectorAll(".header-link").length; i++) {
      document.querySelectorAll(".header-link")[i].style.color = "#fff"
    }
  } else {
    menu.classList.remove("header-scroll");
    for (let i = 0; i < document.querySelectorAll(".header-link").length; i++) {
      document.querySelectorAll(".header-link")[i].style.color = "#000"
    }
  }
});
window.addEventListener('scroll', function(){

const button = document.querySelector('.btn-home');
let scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

if (scrollPosition > 100) {
  button.style.opacity = '1';
} else {
  button.style.opacity = '0';
}
});
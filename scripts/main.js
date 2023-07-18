document.cookie = "cookie_name=cookie_value; max-age=3600; secure; samesite=Lax";

let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
            let response = xhr.responseText; // Aqui você obtém a resposta da solicitação
            // Faça algo com a resposta...
        } else if (xhr.status === 404) {
            console.error("Recurso não encontrado (404). Verifique a URL ou a disponibilidade do recurso.");
        } else {
            console.error("Erro ao fazer a solicitação: " + xhr.status);
        }
    }
};
xhr.open("GET", "https://integra-consultoria.vercel.app", true);
xhr.send();

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

  let item = document.getElementById("item")
  let partners = document.getElementById("partners")
  let company = document.getElementById("company")
  let text = document.getElementById("text")
  let title = document.getElementById("title")
  let logo = document.getElementById("logo")
  
    window.addEventListener("scroll", function(){
      const sectionTop = item.getBoundingClientRect().top;
      const sectionMid = partners.getBoundingClientRect().top;
      const sectionSa = company.getBoundingClientRect().top;
      const sectionText = text.getBoundingClientRect().top;
      const sectionTitle = title.getBoundingClientRect().top;
      const sectionLogo = logo.getBoundingClientRect().top;
      const windowHeight=window.innerHeight;
  
      if(sectionTop < windowHeight){
        item.classList.add("ativa");
      }
  
      else{
        item.classList.remove("ativa");
      }
      
      if(sectionMid < windowHeight){
        partners.classList.add("ativa");
      }
  
      else{
        partners.classList.remove("ativa");
      }

      if(sectionSa < windowHeight){
        company.classList.add("ativa");
      }
  
      else{
        company.classList.remove("ativa");
      }

      if(sectionText < windowHeight){
        text.classList.add("ativa");
      }
  
      else{
        text.classList.remove("ativa");
      }
  
      if(sectionTitle < windowHeight){
        title.classList.add("ativa");
      }
  
      else{
        title.classList.remove("ativa");
      }

      if(sectionLogo < windowHeight){
        logo.classList.add("ativa");
      }

      else{
        logo.classList.remove("ativa");
      }
    });

// import { Splide } from '@splidejs/splide';
// import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
    
// new Splide( '.splide' ).mount( { AutoScroll } );

// const splide = new Splide( '.splide', {
//   type   : 'loop',
//   drag   : 'free',
//   focus  : 'center',
//   perPage: 3,
//   autoScroll: {
//     speed: 1,
//   },
// } );

// splide.mount();
/*abre e fecha o menu quando clica no icone: hamburgue. */
//DOM
const nav = document.querySelector("#header nav");
const toggle = document.querySelectorAll("nav .toggle");

//condição
for (const element of toggle) {
  element.addEventListener("click", function () {
    nav.classList.toggle("show");
  });
}

//quando clicar em um item do menu, esconder o menu.

const links = document.querySelectorAll("nav ul li a");

for (const link of links) {
  link.addEventListener("click", function () {
    nav.classList.remove("show");
  });
}

//quando rolar a página vai aparecer uma sobra na borda do menu.
const header = document.querySelector("#header");
const navHeight = header.offsetHeight;

window.addEventListener("scroll", function () {
  if (window.scrollY >= navHeight) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
});

/*Testemonials carousel slider swiper */
const swiper = new Swiper(".swiper-container", {
  slidesPerView: 1, //quantos slide vai aparecer.
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true, //ativar rolagem pela botão rolar do mouse.
  keyboard: true, //ativar setas do teclado.
});

/*Swiper*/


function toggleMenu(){
    const navbar = document.querySelector('.navbar');
    const burger = document.querySelector('.burger');


    burger.addEventListener('click', ()=>{
        navbar.classList.toggle('show-nav')
    });
}

toggleMenu();



//les animations de la section team


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
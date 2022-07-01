var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  centeredSlides: true,
  speed:2500,


  autoplay: {
    delay: 2000,
    
             
    
  
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
},
  breakpoints: {
    640: {
        slidesPerView: 1,
        spaceBetween: 20,
        speed:500,
       
    },
    768: {
        slidesPerView: 2,
        spaceBetween: 40,
        speed:1000,
      
    },
    1024: {
        slidesPerView: 3,
        spaceBetween: 50,
        speed:2500,
    },
}
  
});
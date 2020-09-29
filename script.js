const mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 'auto',
  loop: true,
  autoplay: { 
    delay: 13000,
    disableOnInteraction: false,
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
})

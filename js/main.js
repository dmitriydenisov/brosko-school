const headerSlider = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  // autoplay: {
  //   delay: 3500,
  // },
});

const teamSlider = new Swiper(".team__slider", {
  slidesPerView: 5,
  spaceBetween: 15,
  pagination: {
    el: ".team__pagination",
  },
});

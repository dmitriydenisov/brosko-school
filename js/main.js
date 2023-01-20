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

document.querySelector(".header__btn").addEventListener("click", () => {
  document.querySelector(".header-menu").classList.add("active");
});
document.querySelector(".header__btn-exit").addEventListener("click", () => {
  document.querySelector(".header-menu").classList.remove("active");
});

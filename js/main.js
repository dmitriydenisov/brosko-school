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

//Menu
document.querySelector(".header__btn").addEventListener("click", () => {
  document.querySelector(".header-menu").classList.add("active");
  document.querySelector("body").style.overflow = "hidden";
});
document.querySelector(".header__btn-exit").addEventListener("click", () => {
  document.querySelector(".header-menu").classList.remove("active");
  document.querySelector("body").style.overflowY = "auto";
});
const btns = document.querySelectorAll(".btn");

//Modal
for (let btn of btns) {
  btn.addEventListener("click", () => {
    document.querySelector(".popup-wrapper").classList.add("active");
  });
}
if (document.querySelector(".popup-wrapper").classList.contains("active")) {
  console.log("done");
}
window.addEventListener("click", (e) => {
  if (e.target === document.querySelector(".popup-wrapper")) {
    document.querySelector(".popup-wrapper").classList.remove("active");
  }
});
window.addEventListener("keydown", (e) => {
  if (e.keyCode === 27) {
    document.querySelector(".popup-wrapper").classList.remove("active");
  }
});

const tabs = document.querySelectorAll(".additional-education__tab");

tabs.forEach(function (item, i) {
  item.addEventListener("click", function () {
    let tabName = this.dataset.variant;
    let tabContent = document.querySelector(
      '.additional-education__items[data-variant="' + tabName + '"]'
    );
    const contents = document.querySelectorAll(".additional-education__items");
    for (const content of contents) {
      content.classList.remove("active");
    }
    tabContent.classList.add("active");
  });
});

const teamTabs = document.querySelectorAll(".team__tab");

teamTabs.forEach(function (item, i) {
  item.addEventListener("click", function () {
    let tabNameTeam = this.dataset.team;
    let tabContentTeam = document.querySelector(
      '.team__wrapper[data-team="' + tabNameTeam + '"]'
    );
    for (const test of teamTabs) {
      test.classList.remove("active");
    }
    item.classList.add("active");

    const contents = document.querySelectorAll(".team__wrapper");
    for (const content of contents) {
      content.classList.remove("team__wrapper--active");
    }
    tabContentTeam.classList.add("team__wrapper--active");
  });
});

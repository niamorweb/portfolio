let containerNavMobile = document.querySelector(".header__mobile_nav");
let btnOpenCloseContainerNav = document.querySelector(".header__mobile");
let btnOpenNav = document.querySelector(".header__mobile_icon_open");
let btnCloseNav = document.querySelector(".header__mobile_icon_close");
let link = document.querySelectorAll(".header__mobile_nav_link");
// header__mobile_nav_active;

btnOpenCloseContainerNav.addEventListener("click", () => {
  window.scrollTo(0, 0);
  containerNavMobile.classList.toggle("header__mobile_nav_active");
  btnOpenNav.classList.toggle("hidden");
  btnCloseNav.classList.toggle("hidden");
  document.body.classList.toggle("overflow-hidden");
});

for (let i = 0; i < link.length; i++) {
  link[i].addEventListener("click", () => {
    containerNavMobile.classList.toggle("header__mobile_nav_active");
    btnOpenNav.classList.toggle("hidden");
    btnCloseNav.classList.toggle("hidden");
    document.body.classList.toggle("overflow-hidden");
  });
}

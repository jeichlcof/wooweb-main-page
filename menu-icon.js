const menuBtn = document.querySelector(".menu-icon__box__icon");
const menu = document.querySelector(".menu");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menu.style.visibility = "visible";
    menu.style.opacity = "1";
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menu.style.visibility = "hidden";
    menu.style.opacity = "0";
    menuOpen = false;
  }
});

const navC = document.querySelector(".nav-for-sm");
const navListForSmall = document.querySelectorAll(".nav-li-for-sm");
const openNav = document.querySelector(".open-nav-btn");
const closeNav = document.querySelector(".close-nav-btn");

const mainNav = document.getElementById("header-nav");

let prevScrollPos = window.pageYOffset;
window.onscroll = () => {
  let currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    mainNav.style.top = '0px'
  } else {
    mainNav.style.top = '-60px'
  }
  prevScrollPos = currentScrollPos;
}

openNav.addEventListener("click", () => {
  navC.classList.add("flex", "min-[500px]:hidden");
  navC.classList.remove("hidden");
});
closeNav.addEventListener("click", () => {
  navC.classList.remove("flex", "min-[500px]:hidden");
  navC.classList.add("hidden");
});

navListForSmall.forEach((li) => {
  li.addEventListener("click", hideNavContainer);

  function hideNavContainer() {
    navC.classList.remove("flex", "min-[500px]:hidden");
    navC.classList.add("hidden");
  }
});

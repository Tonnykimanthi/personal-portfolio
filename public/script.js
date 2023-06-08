const navC = document.querySelector(".nav-for-sm");
const navListForSmall = document.querySelectorAll(".nav-li-for-sm");
const openNav = document.querySelector(".open-nav-btn");
const closeNav = document.querySelector(".close-nav-btn");

const mainNav = document.getElementById("header-nav");

let prevScrollPos = window.pageYOffset;
window.onscroll = () => {
  let currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    mainNav.classList.toggle('top-0', true);
    mainNav.classList.toggle('-top-14', false);
  } else {
    mainNav.classList.toggle('top-0', false);
    mainNav.classList.toggle('-top-14', true);
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

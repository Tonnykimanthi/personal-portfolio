const navC = document.querySelector('.nav-for-sm');
const openNav = document.querySelector('.open-nav-btn');
const closeNav = document.querySelector('.close-nav-btn');

openNav.addEventListener('click', ()=>{
    navC.classList.add('flex', 'min-[500px]:hidden')
    navC.classList.remove('hidden')
});
closeNav.addEventListener('click', ()=>{
    navC.classList.remove('flex', 'min-[500px]:hidden')
    navC.classList.add('hidden')
});
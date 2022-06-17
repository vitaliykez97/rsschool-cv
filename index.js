// Adaptive menu
const toggleBtn = document.querySelector('.toggle');
const nav = document.querySelector('.nav');
const navList = document.querySelector('.nav-list');
const navItems = document.querySelectorAll('.nav-item');

function switchMenu() {
  toggleBtn.classList.toggle('active');
  nav.classList.toggle('active');
  navList.classList.toggle('active');
}
toggleBtn.addEventListener('click', switchMenu);

function closeMenu() {
  setTimeout(() => {
    toggleBtn.classList.remove('active');
    nav.classList.remove('active');
    navList.classList.remove('active');
  }, 50);  
}
navItems.forEach(el => el.addEventListener('click', closeMenu));
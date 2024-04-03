


function closeMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.remove('active');
}
const html = document.documentElement;
const menu = document.querySelector('.menu');
function openMenu(){
  menu.classList.add('active');
  html.addEventListener('click', closeMenuOnBodyClick);
}
function closeMenu(){
    menu.classList.remove('active');
    html.removeEventListener('click', closeMenuOnBodyClick);
  }
  function closeMenuOnBodyClick(event){
    closeMenu();
  }
  function closeMenuOnBodyClick(event){
    const path = event.composedPath();
    if (path.some(elem => elem.id === 'menu')) {
      return;
    }
    closeMenu();
  }
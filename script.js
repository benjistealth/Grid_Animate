


function closeMenu() {
    const menu = document.querySelector('.menu');
    
    menu.classList.remove('active');
}


const html = document.documentElement;
const menu = document.querySelector('.menu');
function openMenu(){
  // add class to the menu to make it show
  menu.classList.add('active');
  // add event listener to the html element
  html.addEventListener('click', closeMenuOnBodyClick);
}

function closeMenu(){
    // add class to the menu to make it show
    menu.classList.remove('active');
    // add event listener to the html element
    html.removeEventListener('click', closeMenuOnBodyClick);
  }

  function closeMenuOnBodyClick(event){
    closeMenu();
  }

  function closeMenuOnBodyClick(event){
    // get the event path
    const path = event.composedPath();
    // check if it has the menu element
    if (path.some(elem => elem.id === 'menu')) {
      // terminate this function if it does
      return;
    }
    closeMenu();
  }



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
    if (path.some(elem => elem.id === 'menu' || elem.id === 'menu-button')) {
      return;
    }
    closeMenu();
  }

const gallery = document.querySelector('.gallery');
if (gallery) {
  gallery.addEventListener('click', function (event) {
    const img = event.target.closest('.card-img-top');
    if (img) openImage(img);
  });
}

// Real fullscreen where the browser allows it; iPhone can't fullscreen images, so the viewer just fills the window there
function openImage(img) {
  const viewer = document.createElement('div');
  viewer.className = 'image-viewer';
  viewer.innerHTML = '<img>';
  viewer.firstChild.src = img.dataset.full || img.src;
  viewer.firstChild.alt = img.alt;
  viewer.addEventListener('click', closeImage);
  document.body.appendChild(viewer);
  const request = viewer.requestFullscreen || viewer.webkitRequestFullscreen;
  if (request) {
    const result = request.call(viewer);
    if (result) result.catch(function () {});
  }
}

function closeImage() {
  const viewer = document.querySelector('.image-viewer');
  if (!viewer) return;
  const fullscreen = document.fullscreenElement || document.webkitFullscreenElement;
  if (fullscreen) {
    (document.exitFullscreen || document.webkitExitFullscreen).call(document);
  }
  viewer.remove();
}

// Esc or the back gesture leaves fullscreen without a tap, so close the viewer then too
function onFullscreenChange() {
  if (!document.fullscreenElement && !document.webkitFullscreenElement) closeImage();
}
document.addEventListener('fullscreenchange', onFullscreenChange);
document.addEventListener('webkitfullscreenchange', onFullscreenChange);

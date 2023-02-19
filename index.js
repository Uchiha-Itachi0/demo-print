const menu = document.getElementsByClassName('menu')[0];
menu.addEventListener('click', rotateIt);
function rotateIt() {
    menu.classList.toggle('rotate');
}
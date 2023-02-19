const menu = document.getElementsByClassName('bottom')[0];
menu.addEventListener('click', rotateIt);
function rotateIt() {
    menu.classList.toggle('rotate');
}
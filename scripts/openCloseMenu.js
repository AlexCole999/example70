const menu = document.getElementById('openedmenu');
const openMenuButton = document.getElementById('menubutton');
const closeMenuButton = document.getElementById('closemenubutton');
openMenuButton.addEventListener('click', () => { menu.classList.toggle('display-none') })
closeMenuButton.addEventListener('click', () => { menu.classList.toggle('display-none') })
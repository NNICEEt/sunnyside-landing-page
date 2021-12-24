const navMenuElem = document.querySelector('.nav-menu');
const hamburgerElem = document.querySelector('.hamburger');
const outsideContainerElem = document.querySelector('.transparent-container');

hamburgerElem.addEventListener('click', () => {
    navMenuElem.classList.toggle('active')
    outsideContainerElem.classList.toggle('active')
})

navMenuElem.childNodes.forEach(child => {
    child.addEventListener('click', () => navMenuElem.classList.toggle('active'))
});
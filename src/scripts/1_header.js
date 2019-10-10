let menuIcon = document.querySelector('.menuIcon')
let subMenu = document.querySelector('.subMenu')

menuIcon.addEventListener(
    'click',
    function(){
        subMenu.classList.toggle('visible')
    }
)

function closeMenu() {
    subMenu.classList.remove('visible')
}
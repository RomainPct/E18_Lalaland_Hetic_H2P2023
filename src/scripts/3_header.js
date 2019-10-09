let menuIcon = document.querySelector('.menuIcon')
let subMenu = document.querySelector('.subMenu')


menuIcon.addEventListener(
    'click',
    function(){
        if(subMenu.classList.contains('visible') == true){
            subMenu.classList.remove('visible')
        } else {
            subMenu.classList.add('visible')
        }
    }
)

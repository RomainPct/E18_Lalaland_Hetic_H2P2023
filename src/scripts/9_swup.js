const swup = new Swup()

function init(){
    window.scrollTo(0,0)
    window.onscroll = closeMenu
    let path = window.location.pathname
    if (path == "/" || path == "/accueil") {
        setExperience()
    } else if (path == "/galerie") {
        setGalerie()
    } else if (path == "/casting") {
        setCasting()
    }
}

swup.on('animationOutStart',closeMenu)

document.addEventListener("DOMContentLoaded", init)
swup.on('contentReplaced', init)
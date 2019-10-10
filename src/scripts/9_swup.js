const swup = new Swup()

function init(){
    window.scrollTo(0,0)
    window.onscroll = closeMenu
    let path = window.location.pathname
    if (path == "/" || path == "/accueil") {
        console.log("set accueil")
        setExperience()
    } else if (path == "/galerie") {
        console.log("set galerie")
        setGalerie()
    } else if (path == "/casting") {
        console.log("set casting")
        setCasting()
    } else {
        console.log("No special js")
        console.log(window.location.pathname)
    }
}

swup.on('animationOutStart',closeMenu)

document.addEventListener("DOMContentLoaded", init)
swup.on('contentReplaced', init)
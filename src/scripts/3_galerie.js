function setGalerie(){
    window.onscroll = function (e) {
        console.log(e)
    }
}

if (window.location.pathname == "/galerie") {
    setGalerie()
}
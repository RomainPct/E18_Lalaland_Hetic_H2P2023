let galeriePictures

function setGalerie(){
    galeriePictures = selectAll('.galerie__imageBox')
    setGaleriePicturesPosition()
    window.onresize = setGaleriePicturesPosition
    window.onscroll = function () {
        setGaleriePicturesPosition()
        closeMenu()
    }
}

function setGaleriePicturesPosition() {
    galeriePictures.forEach(pic => {
        let val = (window.scrollY + (window.innerHeight/2)) - (pic.offsetTop + (pic.offsetHeight/2))
        if (val > 0) {
            pic.style.transform = "translateY(-"+(val/3)+"px)"
        } else {
            pic.style.transform = "translateY(0px)"
        }
    })
}
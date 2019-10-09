let galeriePictures = selectAll('.galerie__imageBox')

function setGaleriePicturesCenter(){
    for (let i = 0; i < galeriePictures.length; i++) {
        galeriePictures[i].centre = (window.innerHeight/2) - galeriePictures[i].offsetTop - (galeriePictures[i].offsetHeight/2)
        galeriePictures[i].style.transform = "translateY(-"+ Math.abs( (galeriePictures[i].centre + window.scrollY) /3) +"px)"
    }
}

function setGalerie(){
    setGaleriePicturesCenter()
    window.onresize = setGaleriePicturesCenter
    window.onscroll = function () {
        galeriePictures.forEach(pic => {
            pic.style.transform = "translateY(-"+ Math.abs( (pic.centre + window.scrollY) /3) +"px)"
        })
    }
}

if (window.location.pathname == "/galerie") {
    setGalerie()
}
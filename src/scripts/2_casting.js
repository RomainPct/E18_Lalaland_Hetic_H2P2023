let imagesCasting, charactersLine

function setCasting() {
    imagesCasting = document.querySelectorAll(".characterContainer__img")
    charactersLine = document.querySelectorAll(".characterContainer")
    // détecter l'événement de scroll
    window.onscroll = function (){
        closeMenu()
        // Pour chaque image de l'effet
        for(let i = 0; i < imagesCasting.length; i++){
           heightScroll = window.scrollY + (window.innerHeight / 2)
           centerPosition = charactersLine[i].offsetTop + (charactersLine[i].offsetHeight / 2)

           let val = (heightScroll - centerPosition) / window.innerHeight
           charactersLine[i].style.opacity = 1 - val 

            const offset = val * 600
            console.log(i+ " => "+offset)
            if (offset > 0) {
                imagesCasting[i].style.transform = "translateY("+ offset +"px)"
            } else {
                imagesCasting[i].style.transform = "translateY(0px)"
            }
        }
    }  
}
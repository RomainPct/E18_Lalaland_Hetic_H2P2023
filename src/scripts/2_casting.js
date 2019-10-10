// SelectAll les images qui doivent faire parti de l'effet
let imagesCasting = document.querySelectorAll(".characterContainer__img")
// SelectAll les __description qui doivent faire parti de l'effet
let descriptionActors = document.querySelectorAll(".characterContainer__description")
let charactersLine = document.querySelectorAll(".characterContainer")

/*
function setCasting() {
    // détecter l'événement de scroll
    window.onscroll = function (e){
        console.log("Je suis en train de scroll")
        // Récupérer la position du scroll sur Y
        let scroll = window.scrollY
        // Pour chaque image de l'effet
        for(let i = 0; i < imagesCasting.length; i++){
           console.log("Je suis dans l'image : "+i)
            // Récupérer la position de l'image sur l'écran de l'user
            positionImage = imagesCasting[i].parentElement.offsetTop
            console.log(positionImage)
            screenHeight = window.innerHeight
            posLeftImg = (scroll + (screenHeight / 2) ) - positionImage
            console.log("La position restante est :" + posLeftImg)
            // Appliquer un transform selon la valeur du scroll
            const offset = (posLeftImg / 2)
            console.log("translateY("+ offset +"px)")
            imagesCasting[i].style.transform = "translateY("+ offset +"px)"
        }
            Pour chaque __description
            for (let i = 0; i < descriptionActors.length; i++){
                console.log("Je suis dans la description :" +i)
                Récupérer la position de la __description sur l'écran de l'user
                positionDescription = descriptionActors[i].parentElement.offsetTop
                console.log(positionDescription)
                screenHeight = window.innerHeight
                posLeftDescri = (scroll + screenHeight) - positionDescription
                Appliquer un transform selon la valeur du scroll  
                const offsetDescri = -(posLeftDescri / 2)
                descriptionActors[i].style.transform = "translateY("+ offsetDescri +"px)"
            // }
    }  
} */

function setCasting() {
    // détecter l'événement de scroll
    window.onscroll = function (e){
        console.log("Je suis en train de scroll")
        // Récupérer la position du scroll sur Y
        let scroll = window.scrollY
        // Pour chaque image de l'effet
        for(let i = 0; i < imagesCasting.length; i++){
           console.log("Je suis dans l'image : "+i)
           heightScroll = scroll + (window.innerHeight / 2)
           centerPosition = charactersLine[i].offsetTop + (charactersLine[i].offsetHeight / 2)

           let val = (heightScroll - centerPosition) / window.innerHeight
           charactersLine[i].style.opacity = 1 - val 
           
            const offset = val * 600
            console.log(i +" -> "+ offset)
            if (offset > 0) {
                imagesCasting[i].style.transform = "translateY("+ offset +"px)"
            } else {
                imagesCasting[i].style.transform = "translateY(0px)"
            }
        }
    }  
}

if (window.location.pathname == "/casting") {
    setCasting()
}
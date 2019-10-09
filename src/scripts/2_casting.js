// SelectAll les images qui doivent faire parti de l'effet
let imagesCasting = document.querySelectorAll(".characterContainer__img")
// SelectAll les __description qui doivent faire parti de l'effet
let descriptionActors = document.querySelectorAll(".characterContainer__description")

// détecter l'événement de scroll
    // Récupérer la position du scroll sur Y
    // Pour chaque image de l'effet
        // Récupérer la position de l'image sur l'écran de l'user
        // Si elle est visible
            // Appliquer un transform selon la valeur du scroll
    // Pour chaque __description
        // Récupérer la position de la __description sur l'écran de l'user
        // Si elle est visible
            // Appliquer un transform selon la valeur du scroll        

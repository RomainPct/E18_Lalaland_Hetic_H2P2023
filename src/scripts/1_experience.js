const launchExpButton = select('#js_launchExperience'),
    experience = select("#js_experience"),
    experienceNavigator = select('#js_experienceNavigator'),
    themeInput = select('#js_experienceNavigatorInput')
    themeLabel = select('#js_experienceNavigatorLabel'),
    leaveExperienceButton = select('#js_leaveExperience'),
    videosContainer = select('#js_videosContainer'),
    helpLines = selectAll('.experience__navigator__help__line'),
    themes = [ "amour", "bonheur", "danse", "casting", "rêves", "nuit", "passion", "futur", "échec", "magie", "soulier" ],
    themesUnaccented = [ "amour", "bonheur", "danse", "casting", "reves", "nuit", "passion", "futur", "echec", "magie", "soulier" ],
    typedTheme = ""

function hideAndCleanExperienceNavigator(){
    experienceNavigator.classList.add('hidden')
    setTimeout(function(){
        setThemeLabelContent(null,true)
    },1000)
}
function launchVideo(){
    video = videosContainer.querySelector('video[data-name="'+typedTheme+'"]')
    video.play()
    // Réaffiche le navigateur quand la vidéo est finie
    video.addEventListener('ended',function(){
        experienceNavigator.classList.remove('hidden')
        themeInput.focus()
        videosContainer.style.filter = "saturate(0%)"
    })
}

function filtreThemes(theme, i){
    return theme.indexOf(typedTheme) == 0 || themesUnaccented[i].indexOf(typedTheme) == 0
}

function playNote(index){
    console.log("Play note : "+index)
    select('#js_note'+index).play()
}

function setThemesInput(){
    themeInput.addEventListener('input',function(){
        let isLonger = (typedTheme.length < themeInput.value.length)
        typedTheme = themeInput.value.toLowerCase()
        // Chercher le mot que l'utilisateur tape parmis les thèmes dispos
        possibleThemes = themes.filter(filtreThemes)
        if (possibleThemes.length > 0) {
            setThemeLabelContent((possibleThemes.length == 1) ? possibleThemes[0] : "")
            videosContainer.style.filter = "saturate("+ 100 * (typedTheme.length / possibleThemes[0].length) +"%)"
            if (isLonger) {
                playNote(typedTheme.length)
            }
            if (themes.includes(typedTheme)){
                for (let i = typedTheme.length + 1; i <= 7; i++) {
                    playNote(i)
                }
                hideAndCleanExperienceNavigator()
                launchVideo()
            }
        } else {
            // Pas de thèmes correspondants à sa recherche
        }
    })
}

function setExperienceActions(){
    launchExpButton.addEventListener('click',function(e){
        e.preventDefault()
        experience.classList.add('visible')
        themeInput.focus()
    })
    
    leaveExperienceButton.addEventListener('click',function(e){
        e.preventDefault()
        experience.classList.remove('visible')
        videosContainer.querySelectorAll('video').forEach(video => {
            video.pause()  
        })
    })
}

function setThemeLabelContent(value = null, resetingInput = false){
    if (value !== null) {
        themeLabel.innerText = value
    } else {
        themeLabel.innerText = themes[Math.floor(Math.random()*themes.length)]
    }
    themeInput.style.width = themeLabel.offsetWidth +"px"
    if (resetingInput) {
        themeInput.value = ""
    }
}

function setHelpWords(){
    helpLines.forEach(line => {
        themes.forEach(theme => {
            let span = document.createElement('span')
            span.innerText = theme
            span.addEventListener('click',function(){
                setThemeLabelContent(theme,true)
                themeInput.focus()
                videosContainer.style.filter = "saturate(0%)"
            })
            line.appendChild(span)  
        })
    })
}

function setExperience(){
    setThemesInput()
    setExperienceActions()
    setHelpWords()
    setThemeLabelContent()
}

setExperience()
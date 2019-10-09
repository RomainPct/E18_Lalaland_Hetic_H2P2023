const launchExpButton = select('#js_launchExperience'),
    experience = select("#js_experience"),
    experienceNavigator = select('#js_experienceNavigator'),
    themeInput = select('#js_experienceNavigatorInput')
    themeLabel = select('#js_experienceNavigatorLabel'),
    leaveExperienceButton = select('#js_leaveExperience'),
    videosContainer = select('#js_videosContainer'),
    loadedVideos = [],
    helpLines = selectAll('.experience__navigator__help__line'),
    themes = [ "amour", "bonheur", "danse", "casting", "rêves", "nuit", "passion", "futur", "échec", "magie", "soulier" ],
    themesUnaccented = [ "amour", "bonheur", "danse", "casting", "reves", "nuit", "passion", "futur", "echec", "magie", "soulier" ],
    typedTheme = "",
    keySounds = []

function hideAndCleanExperienceNavigator(){
    experience.classList.add('videoFocused')
    setTimeout(function(){
        setThemeLabelContent(null,true)
    },3000)
}
function launchVideo(){
    video = videosContainer.querySelector('video[data-name="'+typedTheme+'"]')
    video.play()
    // Réaffiche le navigateur quand la vidéo est finie
    video.addEventListener('ended',function(){
        experience.classList.remove('videoFocused')
        themeInput.focus()
        videosContainer.style.filter = "saturate(0%)"
    })
}

function filtreThemes(theme, i){
    return theme.indexOf(typedTheme) == 0 || themesUnaccented[i].indexOf(typedTheme) == 0
}

function playNote(index){
    console.log("Play note "+index)
    keySounds[index].play()
}

function setThemesInput(){
    themeInput.addEventListener('input',function(){
        let isLonger = (typedTheme.length < themeInput.value.length)
        typedTheme = themeInput.value.toLowerCase()
        // Chercher le mot que l'utilisateur tape parmis les thèmes dispos
        possibleThemes = themes.filter(filtreThemes)
        if (possibleThemes.length > 0) {
            setThemeLabelContent((possibleThemes.length == 1) ? possibleThemes[0] : possibleThemes[Math.floor(Math.random()*possibleThemes.length)])
            themeInput.value = possibleThemes[0].substring(0,typedTheme.length)
            videosContainer.style.filter = "saturate("+ 100 * (typedTheme.length / possibleThemes[0].length) +"%)"
            if (isLonger) {
                playNote(typedTheme.length - 1)
            }
            if (themes.includes(typedTheme)){
                hideAndCleanExperienceNavigator()
                for (let i = 0; i <= 7 - typedTheme.length; i++) {
                    setTimeout(function(){
                        if (i <= 6 - typedTheme.length) {
                            playNote(typedTheme.length + i)
                        } else {
                            launchVideo()
                        }
                    }, 350 * (i + 1))
                }
            }
        } else {
            // Lancer le son mauvais
            playNote(7)
            // Annuler la derniere lettre
            typedTheme = typedTheme.slice(0, -1)
            themeInput.value = typedTheme
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
        experience.classList.remove('videoFocused')
        videosContainer.querySelectorAll('video').forEach(video => {
            video.pause()
        })
    })
}

function setThemeLabelContent(value = null, resetingInput = false){
    const selectedTheme = (value !== null) ? value : themes[Math.floor(Math.random()*themes.length)]
    themeLabel.innerText = selectedTheme
    themeInput.style.width = themeLabel.offsetWidth +"px"
    if (resetingInput) {
        themeInput.value = ""
        typedTheme = ""
    }
    // Load la video
    if (!loadedVideos.includes(selectedTheme)) {
        const video = document.createElement('video')
        video.setAttribute('src','assets/videos/'+selectedTheme+'.mp4')
        video.setAttribute('preload','auto')
        video.setAttribute('data-name',selectedTheme)
        videosContainer.appendChild(video)
        loadedVideos.push(selectedTheme)
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

function loadNotes(){
    for (let i = 0; i <= 7; i++) {
        keySounds.push(new Howl({
            src: ['assets/songs/note'+i+'.webm','assets/songs/note'+i+'.mp3']
        }))
    }
}

function setExperience(){
    setThemesInput()
    setExperienceActions()
    setHelpWords()
    setThemeLabelContent()
    loadNotes()
}

setExperience()
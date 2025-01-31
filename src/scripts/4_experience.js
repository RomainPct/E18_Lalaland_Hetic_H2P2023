let launchExpButton, experience, experienceNavigator, themeInput, themeLabel, leaveExperienceButton, videosContainer, loadedVideos, helpLines, typedTheme, keySounds, alreadyPlayedThemes,
    themes = [ "amour", "bonheur", "danse", "casting", "rêves", "nuit", "passion", "futur", "échec", "magie", "soulier" ],
    themesUnaccented = [ "amour", "bonheur", "danse", "casting", "reves", "nuit", "passion", "futur", "echec", "magie", "soulier" ]

function setExperienceVariables(){
    launchExpButton = select('#js_launchExperience')
    experience = select("#js_experience")
    experienceNavigator = select('#js_experienceNavigator')
    themeInput = select('#js_experienceNavigatorInput')
    themeLabel = select('#js_experienceNavigatorLabel')
    leaveExperienceButton = select('#js_leaveExperience')
    videosContainer = select('#js_videosContainer')
    loadedVideos = []
    helpLines = selectAll('.experience__navigator__help__line')
    typedTheme = ""
    keySounds = []
    alreadyPlayedThemes = JSON.parse(localStorage.getItem("alreadyPlayedThemes"))
    if (alreadyPlayedThemes == null) {
        alreadyPlayedThemes = []
    }
}

function focusVideo(theme) {
    // Cacher l'ancienne vidéo
    focusedVideo = videosContainer.querySelector('video.focus')
    if (focusedVideo) {
        focusedVideo.classList.remove('focus')
    }
    // Afficher la nouvelle
    video = videosContainer.querySelector('video[data-name="'+theme+'"]')
    video.currentTime = 0
    video.classList.add('focus')
}

function launchVideo(){
    focusVideo(typedTheme)
    themeInput.blur()
    video = videosContainer.querySelector('video[data-name="'+typedTheme+'"]')
    video.play()
    // Réaffiche le navigateur quand la vidéo est finie
    video.addEventListener('ended',function(){
        setThemeAsAlreadyPlayed(typedTheme)
        experience.classList.remove('videoFocused')
        themeInput.focus()
        videosContainer.style.filter = "saturate(0%)"
        setThemeLabelContent(null,true)
    })
}

function setThemeAsAlreadyPlayed(theme) {
    if (!alreadyPlayedThemes.includes(theme)) {
        alreadyPlayedThemes.push(theme)
        localStorage.setItem('alreadyPlayedThemes',JSON.stringify(alreadyPlayedThemes))
    }
    setVisuallyThemeAsAlreadyPlayed(theme)
}

function setVisuallyThemeAsAlreadyPlayed(theme) {
    if (themes.includes(theme)) {
        experienceNavigator.querySelectorAll('span[data-theme='+theme+']').forEach( span => {
            span.classList.add('alreadySeen')
        })
    }
}

function filtreThemes(theme, i){
    return theme.indexOf(typedTheme) == 0 || themesUnaccented[i].indexOf(typedTheme) == 0
}

function playNote(index){
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
                experience.classList.add('videoFocused')
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
            if (typedTheme.slice(-1) != "^") {
                playNote(7)
            }
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
        setTimeout(function(){
            videosContainer.style.filter = "saturate(0%)"
            setThemeLabelContent(null,true)
        },1000)
    })
}

function setThemeLabelContent(value = null, resetInput = false){
    const selectedTheme = (value !== null) ? value : themes[Math.floor(Math.random()*themes.length)]
    themeLabel.innerText = selectedTheme
    themeInput.style.width = themeLabel.offsetWidth +"px"
    if (resetInput) {
        themeInput.value = ""
        typedTheme = ""
    }
    // Load la video
    loadVideo(selectedTheme)
    setTimeout(function(){
        focusVideo(selectedTheme)
    },10) // Timeout pour éviter un bug de transition moche sur certains navigateurs
}

function loadVideo(theme) {
    if (!loadedVideos.includes(theme)) {
        const video = document.createElement('video')
        video.setAttribute('src','assets/videos/'+themesUnaccented[themes.indexOf(theme)]+'.m4v')
        video.setAttribute('preload','auto')
        video.setAttribute('data-name',theme)
        videosContainer.appendChild(video)
        loadedVideos.push(theme)   
    }
}

function setHelpWords(){
    helpLines.forEach(line => {
        themes.forEach(theme => {
            let span = document.createElement('span')
            span.setAttribute('data-theme',theme)
            span.innerText = theme
            span.addEventListener('click',function(){
                setThemeLabelContent(theme,true)
                themeInput.focus()
                videosContainer.style.filter = "saturate(0%)"
            })
            line.appendChild(span)  
        })
    })
    alreadyPlayedThemes.forEach(theme => {
        setVisuallyThemeAsAlreadyPlayed(theme)
    })
}

function loadNotes(){
    for (let i = 0; i <= 7; i++) {
        keySounds.push(new Howl({
            src: ['assets/songs/note'+i+'.webm','assets/songs/note'+i+'.mp3'],
            volume: 0.4
        }))
    }
}

function setExperience(){
    setExperienceVariables()
    setThemesInput()
    setExperienceActions()
    setHelpWords()
    setThemeLabelContent()
    loadNotes()
}
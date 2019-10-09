<?php
$nextPageLink = "/synopsis";
$nextPageName = "Le synopsis";
?>
<section id="home">
    
    <div class="hero">
    <span class="title">La La Land</span>
    <a id="js_launchExperience" class="btn hero_btn" href="#experience">Lancer l'expérience</a>
    </div>
        <div class="awards">
            <img src="assets/images/awardvenice.png" class="toronto" alt="">
            <img src="assets/images/awarddamien.png" class="damienc" alt="">
            <img src="assets/images/awardsong.png" class="song" alt="">
            <img src="assets/images/awardproduction.png" class="production" alt="">
            <img src="assets/images/awardvenice.png" class="venice" alt="">
        </div>
</section>

<section id="js_experience" class="experience">
    <div class="experience__navigator" id="js_experienceNavigator">
        <div>
            <div class="experience__navigator__inputBox">
                <input type="text" id="js_experienceNavigatorInput" name="experience_theme" class="experience__navigator__inputBox__input" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">
                <label for="experience_theme" id="js_experienceNavigatorLabel" class="experience__navigator__inputBox__label">Danse</label>
            </div>
            <p class="secondary experience__navigator__instructions">Tapez le thème que vous souhaitez découvrir</p>
        </div>
        <div class="experience__navigator__help">
            <div class="experience__navigator__help__line"></div>
            <div class="experience__navigator__help__line"></div>
        </div>
    </div>
    <div id="js_videosContainer" class="experience__videosContainer"></div>
    <a href="#" id="js_leaveExperience" class="secondary experience__leaveLabel">Quitter l'expérience</a>
    <div id="audios"></div>
</section>
<script src="assets/howler/dist/howler.min.js"></script>
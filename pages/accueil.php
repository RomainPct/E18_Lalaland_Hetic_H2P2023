<?php
$nextPageLink = "/synopsis";
$nextPageName = "Le synopsis";
?>
<section class="homeContainer">
    <div class="homeContainer__box">
         <h2 class="homeContainer__box__title">La La Land</h2>
        <a id="js_launchExperience" class="homeContainer__box__link" href="#"> <img src="/assets/images/imagesHome/videoIcon.png" alt="Démarrer l'expérience La La Land"> <br>démarrer l'expérience</a>
         
    </div>
    <div class="homeContainer__awards">
        <img src="assets/images/imagesHome/awarddamien.png" alt="actress">
        <img src="assets/images/imagesHome/awardproduction.png" alt="production">
        <img src="assets/images/imagesHome/awardsong.png" alt="song">
        <img src="assets/images/imagesHome/awardtoronto.png" alt="toronto">
        <img src="assets/images/imagesHome/awardvenice.png" alt="venice">
    </div>
</section>

<section id="js_experience" class="experience">
    <div class="experience__navigator" id="js_experienceNavigator">
        <div>
            <div class="experience__navigator__inputBox">
                <input type="text" id="js_experienceNavigatorInput" name="experience_theme" class="experience__navigator__inputBox__input" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">
                <label for="experience_theme" id="js_experienceNavigatorLabel" class="experience__navigator__inputBox__label">Danse</label>
            </div>
            <p class="small experience__navigator__instructions">Tapez le thème que vous souhaitez découvrir</p>
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
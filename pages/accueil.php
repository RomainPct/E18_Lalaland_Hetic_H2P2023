<?php
$nextPageLink = "/synopsis";
$nextPageName = "Le synopsis";
?>
<h1>Expérience La La Land - Le Film en musique</h1>
<section class="homeContainer">
    <div class="homeContainer__box">
        <h2 class="homeContainer__box__title">La La Land</h2>
        <a id="js_launchExperience" class="homeContainer__box__link" href="#experience" title="Lancer l'expérience">
            <div class="homeContainer__box__link__icon">
                <img src="/assets/images/imagesHome/key.svg" alt="Note de musique La La Lande">
            </div>
            <span>Vivre l'expérience</span>
        </a>
        <!-- <a id="js_launchExperience" class="homeContainer__box__link" href="#" title="Lancer l'expérience">
            <img src="/assets/images/imagesHome/videoIcon.png" alt="Démarrer l'expérience La La Land">
            <br>Démarrer l'expérience
        </a> -->
         
    </div>
    <div class="homeContainer__awards">
        <img src="assets/images/imagesHome/awarddamien.png" alt="Award Best Director Damien Chazelle">
        <img src="assets/images/imagesHome/awardproduction.png" alt="Award Best Production design">
        <img src="assets/images/imagesHome/awardsong.png" alt="Award best original song">
        <img src="assets/images/imagesHome/awardtoronto.png" alt="People's choice award">
        <img src="assets/images/imagesHome/awardvenice.png" alt="Award Best actress Emma Stone">
    </div>
</section>

<div id="js_experience" class="experience">
    <div class="experience__navigator" id="js_experienceNavigator">
        <div>
            <div class="experience__navigator__inputBox">
                <input type="text" id="js_experienceNavigatorInput" name="experience_theme" class="experience__navigator__inputBox__input" autocomplete="off" autocapitalize="off" spellcheck="false">
                <label for="js_experienceNavigatorInput" id="js_experienceNavigatorLabel" class="experience__navigator__inputBox__label">Danse</label>
            </div>
            <p class="small experience__navigator__instructions">Tapez le thème que vous souhaitez découvrir</p>
        </div>
        <div class="experience__navigator__help">
            <div class="experience__navigator__help__line"></div>
            <div class="experience__navigator__help__line"></div>
        </div>
    </div>
    <div id="js_videosContainer" class="experience__videosContainer"></div>
    <a href="#" id="js_leaveExperience" class="secondary experience__leaveLabel" title="Quitter l'expérience">Quitter l'expérience</a>
    <div id="audios"></div>
</div>
<script src="assets/howler/dist/howler.min.js"></script>
<?php
$nextPageLink = "/musique";
$nextPageName = "La musique";
?>
<div class="galerie">
    <?php
    foreach(scandir("assets/images/galerie/") as $fileName) {
        if ($fileName != "." && $fileName != "..") {
            echo '<div class="galerie__imageBox"><img src="/assets/images/galerie/'.$fileName.'" alt="'.str_replace('.jpg','',$fileName).'" class="galerie__imageBox__image" loading="lazy"></div>';
        }
    }
    ?>
</div>
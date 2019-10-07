<?php
$url = (key_exists('REDIRECT_URL',$_SERVER)) ? $_SERVER['REDIRECT_URL'] : "";
if ($url == "" || $url == "/") {
    echo "Accueil";
} else {
    echo ucfirst(substr($_SERVER['REDIRECT_URL'],1));
}
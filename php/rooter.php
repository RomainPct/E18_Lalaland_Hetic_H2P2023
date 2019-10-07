<?php
$url = (key_exists('REDIRECT_URL',$_SERVER)) ? $_SERVER['REDIRECT_URL'] : "";
if ($url == "" || $url == "/") {
    include_once 'pages/accueil.php';
} else {
    include_once 'pages'.$_SERVER['REDIRECT_URL'].'.php';
}
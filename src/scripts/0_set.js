/*
-----------
Global
-----------
*/

function select(selector){ return document.querySelector(selector) }
function selectAll(selector){ return document.querySelectorAll(selector) }
var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
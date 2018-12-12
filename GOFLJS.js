function start() {
    var width = screen.width / 2;
    var height = screen.height / 2;
    var menuJS = document.getElementById("gameScreen");
    //menuJS.style.marginTop = height;
    //menuJS.style.marginLeft = width;
    
}

function statLimit() {
    var alertJS = document.getElementById("alertMSG");
}

function Vars() {
var HPJS = document.getElementById("health");
}

function task1_Clicked() {
    Vars();
    var alertJS = document.getElementById("alertMSG");
        alertJS.innerHTML = "You went to the Hospital it wasn't a pleasant trip.";
        alert(HPJS.innerHTML);
    }

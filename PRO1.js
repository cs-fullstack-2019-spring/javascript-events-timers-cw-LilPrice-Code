//Stopping you from clicking
var tex = document.querySelector("input");
// KEY: Supposed to be onclick
tex.onmouseover = function () {
    alert("I TOLD YOU NOT TO CLICK THIS!!!")
}
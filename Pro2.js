//Enable & Disable variables
var but = document.querySelector("button");
var i = 0;

var head = document.getElementsByName("h1");
but.onclick = function () {
    if(i === 0){
        head.innerText = "START TYPING";
        i++;
    }
    else {
        head.innerText ="";
        i=0;
    }
    console.log(i)

}


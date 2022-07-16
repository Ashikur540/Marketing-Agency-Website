var menu=document.getElementById("hamicon");
var navbar=document.getElementById("hammenu");

navbar.style.right="-360px";

menu.onclick = function(){
    if (navbar.style.right == "-360px") {
        navbar.style.right="0"
    }
    else{
        navbar.style.right="-360px"
    }
}
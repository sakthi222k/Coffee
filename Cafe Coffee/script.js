//side-navbar,
var sideNavbar = document.querySelector(".side-navbar")
var xMark=document.getElementById("x-mark")
function addNavbar(){
    sideNavbar.style.right= "0"
    xMark.style.right = "20px"
}
function closeNavbar(){
    sideNavbar.style.right = "-60%"
    xMark.style.right = "-60%"
}


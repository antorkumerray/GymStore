
var header = document.getElementById("nn");
window.addEventListener("scroll", function() {
    header.classList.toggle("headeractive", window.scrollY > 20);
});
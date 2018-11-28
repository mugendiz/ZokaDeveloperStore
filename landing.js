// Sticky Navbar


window.onscroll = function() {myFunction()};

var navbar = document.getElementById("topnav");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    topnav.classList.add("sticky")
  } else {
    topnav.classList.remove("sticky");
  }
}

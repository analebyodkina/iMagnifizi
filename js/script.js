// nav toogle
function navToggle() {
    var headerUl = document.getElementById("headerUl");
    headerUl.classList.toggle("active");
  }

// right sidebar
function sideRight() {
  
  var sideRight = document.querySelector('.sidebar._right');
  sideRight.classList.toggle("active");
}
// left
function sideLeft() {  
  var sideLeft = document.querySelector('.sidebar._left');
  sideLeft.classList.toggle("active");
}
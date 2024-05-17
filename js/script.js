// nav toogle
function navToggle() {
    var headerUl = document.getElementById("headerUl");
    headerUl.classList.toggle("active");
    document.body.classList.toggle('overflow-y-hidden');
  }

// right sidebar
function sideRight() {
  var sideLeft = document.querySelector('.sidebar._left');
  var sideRight = document.querySelector('.sidebar._right');
  sideRight.classList.toggle("active");
  sideLeft.classList.remove("active");
}
// left
function sideLeft() {  
  var sideLeft = document.querySelector('.sidebar._left');
  var sideRight = document.querySelector('.sidebar._right');
  sideLeft.classList.toggle("active");
  sideRight.classList.remove("active");
}
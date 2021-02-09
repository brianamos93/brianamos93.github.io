(function () {

  var navButton = document.querySelector(".menu-button");
  var navUl = document.querySelector(".nav-ul");

  function toggleMobileMenu() {
    navUl.classList.toggle("hide-ul");
  }

  navButton.onclick = toggleMobileMenu;
}());

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
(function () {

  var navButton = document.querySelector(".menu-button");
  var navUl = document.querySelector(".nav-ul");

  function toggleMobileMenu() {
    navUl.classList.toggle("hide-ul");
  }

  navButton.onclick = toggleMobileMenu;
}());
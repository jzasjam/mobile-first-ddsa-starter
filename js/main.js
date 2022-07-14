(function () {
  var setMenu = function () {
    // variables
    var burgerMenu = document.querySelector(".burgerMenuContainer img");
    var navBar = document.querySelector("nav");
    var navBarStatus = false;
    navBar.removeAttribute("style");
    // mobile menu
    if (window.getComputedStyle(navBar).overflow == "hidden") {
      var navHeight = navBar.offsetHeight;
      navBar.style.height = "0px";
      burgerMenu.addEventListener("click", function () {
        if (navBarStatus) {
          navBarStatus = false;
          navBar.style.height = "0px";
          burgerMenu.setAttribute("src", "images/whiteMenu.svg");
        } else {
          navBarStatus = true;
          navBar.style.height = navHeight + "px";
          burgerMenu.setAttribute("src", "images/whiteClose.svg");
        }
      });
    } else {
      navBarStatus = false;
      navBar.removeAttribute("style");
      burgerMenu.setAttribute("src", "images/whiteMenu.svg");
    }
  };
  setMenu();
  // resize
  window.addEventListener("resize", function () {
    setMenu();
  });
})();

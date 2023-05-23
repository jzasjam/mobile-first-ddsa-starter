(function () {
  let setMenu = function () {
    // variables
    const burgerMenu = document.querySelector(".burgerMenuContainer img");
    const navBar = document.querySelector("nav");
    let navBarStatus = false;
    navBar.removeAttribute("style");

    // mobile menu
    let isMobileMenu = window.getComputedStyle(navBar).overflow === "hidden";

    if (isMobileMenu) {
      let navHeight = navBar.offsetHeight;
      navBar.style.height = "0px";

      burgerMenu.addEventListener("click", function () {
        navBarStatus = !navBarStatus;
        navBar.style.height = navBarStatus ? navHeight + "px" : "0px";
        burgerMenu.setAttribute(
          "src",
          navBarStatus ? "images/whiteClose.svg" : "images/whiteMenu.svg"
        );
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

addEventListener("DOMContentLoaded", () => {
  const btn_menu = document.querySelector(".btn-menu");
  if (btn_menu) {
    btn_menu.addEventListener("click", () => {
      console.log("HI")
      const menuToDisplay = document.querySelector(".navbar-side-right");
      menuToDisplay.classList.toggle("none");
    });
  }
});

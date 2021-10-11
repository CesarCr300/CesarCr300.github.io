addEventListener("DOMContentLoaded", () => {
    const btn_menu = document.querySelector(".btn-menu")
    if (btn_menu) {
        btn_menu.addEventListener("click", () => {
            const menuToDisplay = document.querySelector(".navbar-left")
            menuToDisplay.classList.toggle("show")
        })
    }
})
/* targeting mobile menu and mobile navigation*/

const mobileMenu = document.querySelector("nav .mobile-menu");
const mobileClose = document.querySelector("nav .mobile-close");
const mobileNavigation = document.querySelector(".mobile-navigation");

/* targeting all mobile navigation list items */
const mobileNavLiAll = document.querySelectorAll("nav.mobile-navigation ul li");

/* targeting all desktop navigation list items */
const desktopNavLiAll = document.querySelectorAll("nav ul li");

/* when menu icon is clicked display the navigation */
mobileMenu.addEventListener("click", () => {
    /* display the mobile navigation */
    mobileNavigation.classList.add("active");
    /* make the close icon active */
    mobileClose.classList.add("active");
})
/* add event listener to close button */
mobileClose.addEventListener("click", () => {
    /* make menu icon active */
    mobileNavigation.classList.remove("active");
    /* remove the menu screen */
    mobileClose.classList.remove("active");
})

desktopNavLiAll.forEach((li, i) => {
    li.style.animationDelay = 2000 + i * 140 + "ms";
})

mobileNavLiAll.forEach((li, i) => {
    li.style.animationDelay = 400 + i * 140 + "ms";
})



//Toggle class active
const navbarNav = document.querySelector
('.navbar-nav');
//When the hamburger menu is clicked
document.querySelector('#hamburger-menu').
onclick = () => {
    navbarNav.classList.toggle('active');
};

//click outside of sidebar menu to leave sidebar
const hamburger = document.querySelector
('#hamburger-menu');
document.addEventListener('click', function(e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
})

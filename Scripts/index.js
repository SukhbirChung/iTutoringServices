const menuIcon = document.querySelector('.menuIcon');
menuIcon.addEventListener('click', showSidebar.bind(menuIcon));
window.addEventListener('resize', showSidebar.bind(menuIcon));

function showSidebar(e) {
    if (e.type === "click") {
        this.classList.toggle('menuIconClicked');
    }
    if (e.type === "click" && this.classList.contains('menuIconClicked') ||
        e.type === "resize" && (document.documentElement.clientWidth > 899 || this.classList.contains('menuIconClicked'))) {
        this.previousElementSibling.style.display = "initial";
    }
    else {
        this.previousElementSibling.style.display = "none";
    }
}

let year = document.querySelector('footer span');
year.textContent = new Date().getFullYear();

window.addEventListener('load', () => {
    window.scrollTo(0, 0);
});

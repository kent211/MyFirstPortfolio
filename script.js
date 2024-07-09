let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bi-x');
    navbar.classList.toggle('active');
}

// Get all the sections and navigation links
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

// Function to add or remove the 'active' class based on scrolling
function toggleActiveClass() {
    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');
        const navLink = document.querySelector(`.navbar-nav .nav-link[href*="${id}"]`);

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => link.classList.remove('active'));
            navLink.classList.add('active');

            document.querySelector(`.${id}-content`)?.classList.add('active');
        }
    });
}

// Listen for the scroll event and trigger the toggleActiveClass function
window.addEventListener('scroll', toggleActiveClass);

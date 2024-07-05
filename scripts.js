const nav = document.getElementsByTagName('nav')[0];

window.addEventListener('scroll', () => {
    if (window.scrollY >= window.innerHeight) {
        nav.style.backdropFilter = 'blur(2px)';
        nav.style.webkitBackdropFilter = 'blur(2px)';
        // document.querySelectorAll('.nav-link').forEach(el => el.style.cssText = 'color: black !important');
        // document.querySelectorAll('.navbar-brand').forEach(el => el.style.color = 'black');
        return;
    }
    // document.querySelectorAll('.nav-link').forEach(el => el.style.cssText = 'color: white !important');
    // document.querySelectorAll('.navbar-brand').forEach(el => el.style.color = 'white');
    nav.style.backdropFilter = 'blur(2px)';
    nav.style.webkitBackdropFilter = 'blur(2px)'; 
});

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));
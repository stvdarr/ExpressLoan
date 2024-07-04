const nav = document.getElementsByTagName('nav')[0];

window.addEventListener('scroll', () => {
    if (window.scrollY >= window.innerHeight) {
        nav.style.backdropFilter = 'blur(10px)';
        nav.style.webkitBackdropFilter = 'blur(10px)';
        document.querySelectorAll('.nav-link').forEach(el => el.style.cssText = 'color: black !important');
        document.querySelectorAll('.navbar-brand').forEach(el => el.style.color = 'black');
        return;
    }
    document.querySelectorAll('.nav-link').forEach(el => el.style.cssText = 'color: white !important');
    document.querySelectorAll('.navbar-brand').forEach(el => el.style.color = 'white');
    nav.style.backdropFilter = 'blur(0)';
    nav.style.webkitBackdropFilter = 'blur(0)'; 
});
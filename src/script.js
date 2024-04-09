const navEl = document.querySelectorAll('.navbar');

window.addEventListener('scroll', () =>{
    if (window.scrollY >= 90) {
        navEl.classList.add('navbar-scrolled');
    }else if(window.scrollY < 90) {
        navEl.classList.remove('navbar-scrolled');
    }
});
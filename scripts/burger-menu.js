document.addEventListener('DOMContentLoaded', function() {
    var burger = document.querySelector('.header__burger');
    var nav = document.querySelector('.header__nav');
    var body = document.querySelector('body');

    burger.addEventListener('click', function(event) {
        burger.classList.toggle('active');
        nav.classList.toggle('active');
        body.classList.toggle('lock');
    });
});
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        autoplay: true,
        autoplayTimeout: 3000,
        items: 1,
        loop: true
    });
})

let burger = document.getElementsByClassName('burger')[0];
let navbar = document.getElementsByClassName('navbar')[0];
burger.addEventListener('click',()=>{
    burger.classList.toggle('show-menu')
    navbar.classList.toggle('show')
})
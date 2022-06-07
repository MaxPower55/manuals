let menuBtn = document.querySelector('.menu_btn');
menuBtn.addEventListener('click', function() {
    let mobileMenu = document.querySelector('.mobile_menu');
    mobileMenu.classList.toggle('mobile_menu-active');
}, false);


$(document).ready(function() {
    $('.s7__container').slick({
        arrows: false,
        centerMode: true,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                }
            }
        ]
    });
});
$(document).ready(function() {
    $('.s7__container').slick({
        arrows: false,
        centerMode: true,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                }
            }
        ]
    });
});
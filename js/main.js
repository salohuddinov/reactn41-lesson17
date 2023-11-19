const loading = document.getElementById("loading");

const loadingDuration = 1000; // 1s

setTimeout(() => {
    loading.classList.add('loading-none');
}, loadingDuration);


$(document).ready(function () {
    $("#team-carousel").owlCarousel({
        margin: 30,
        loop: true,
        nav: true,
        navText: ['<img src="images/prev.svg"/>', '<img src="images/next.svg"/>'],
        dots: true,
        autoplay: true,
        autoplayTimeout: 10000,
        responsive: {
            0: {
                items: 1,
                dots: false,
            },
            600: {
                items: 2,
            },
            900: {
                items: 3,
            },
            1200: {
                items: 3,
            },
        },
    });
});
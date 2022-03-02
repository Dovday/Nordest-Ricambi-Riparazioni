$(window).scroll(function() {
    // Get scroll position
    var s = $(window).scrollTop(),

    // scroll value and opacity
    opacityVal = (s / 1000.0);

    // opacity value 0% to 100%
    $('.bg').css('opacity', opacityVal);
});


/* HEADER */

const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener('click', () => {

    const visibility = primaryNav.getAttribute('data-visible');

    if(visibility === 'false') {
        primaryNav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
    } else if(visibility === 'true') {
        primaryNav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
    }

});


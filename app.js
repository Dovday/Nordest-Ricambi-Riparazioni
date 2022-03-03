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

$(document).ready(function () {
    $(document).click(function (event) {
        const clickover = $(event.target);
        const visibility = primaryNav.getAttribute('data-visible');
        
        if (visibility === 'true') {
                primaryNav.setAttribute('data-visible', false);
                navToggle.setAttribute('aria-expanded', false);
        } else if(visibility === 'false' && clickover.hasClass('mobile-nav-toggle')) {
            primaryNav.setAttribute('data-visible', true);
            navToggle.setAttribute('aria-expanded', true);
        }
    });
});
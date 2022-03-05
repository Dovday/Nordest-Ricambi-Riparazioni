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

// SMOOTH SCROLLING WHEN CLICKING ANCHOR LINK

// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();

//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });


// support for old browsers
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});
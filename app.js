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
const anchorLink = document.querySelectorAll('.primary-navigation a');

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

// =============================================
// to get first visable element to update navbar
// =============================================

// Get all elements that have an ID defined
const elem = document.querySelectorAll("*[id]");

// Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {

    const current = document.querySelector("#main-page")
    const bounding = current.getBoundingClientRect();
    const elem_id = current.getAttribute("id");
    console.log(bounding);

    if(bounding.top <= 1){
        document.querySelector(".primary-navigation a[href*=" + elem_id + "]").classList.add("active");
    } else {
        document.querySelector(".primary-navigation a[href*=" + elem_id + "]").classList.remove("active");
    }

  
//   // Now we loop through sections to get height, top and ID values for each
//   elem.forEach(current => {
//     const bounding = current.getBoundingClientRect();
//     const elem_id = current.getAttribute("id");
//     console.log(bounding);
//     /*
//     - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
//     - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
//     */
//     if(bounding < 0){
//       document.querySelector(".primary-navigation a[href*=" + elem_id + "]").classList.add("active");
//     } else {
//       document.querySelector(".primary-navigation a[href*=" + elem_id + "]").classList.remove("active");
//     }
//   });
}

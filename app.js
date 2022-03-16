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
// update primary navigation
// =============================================

// Get all elements that have an ID defined
const elem = document.querySelectorAll("*[id]");

// Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);
window.addEventListener("click", navHighlighter);

function navHighlighter() {
    elem.forEach(current => {

        const bounding = current.getBoundingClientRect();
        const height = -(current.clientHeight+1);

        const elem_id = current.getAttribute("id");

        if((elem_id !== "call-action-navigation") && (elem_id !== "primary-navigation") && (elem_id !== "about-us")) {
            
            console.log(bounding.top);
            
            if ((bounding.top >= height) && (bounding.top < 1)) {
                console.log("in here");
                primaryNav.querySelector("a[href*=" + elem_id + "]").classList.add("active");
            } else {
                primaryNav.querySelector("a[href*=" + elem_id + "]").classList.remove("active");
            }
        }
    });
}

/*
==============================
FUNCTION TO GO BACK TO THE TOP
==============================
*/
//Get the button:
mybutton = document.querySelector(".topBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "flex";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 
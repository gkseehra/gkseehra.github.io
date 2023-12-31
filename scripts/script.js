$(document).ready(function () {
  // Show the 'about me' section by default
  $('#about').show();
  $('nav a[href="#about"]').addClass('active');

  // Initialize the timeline function
  initializeTimeline();

  // Click event for navigation links
  $('nav a').click(function (event) {
    event.preventDefault();

    // Remove 'active' class from all nav links
    $('nav a').removeClass('active');

    // Add 'active' class to the clicked link
    $(this).addClass('active');

    // Hide all sections
    $('section').hide();

    // Show the section corresponding to the clicked link
    var section = $($(this).attr('href'));
    section.show();
    console.log("HELLLOOOO!!!")
    console.log("section", section)
    console.log((section.is('#work')))
    // If the 'work' section is selected, call the timeline animation function
    if (section.is('#work')) {
      callbackFunc(); // Call the timeline animation function
    }
  });
});

// Original code by Joshy Francis
// CodePen: https://codepen.io/joshyfrancis/pen/KePdEN
var timelines;
function initializeTimeline() {
  'use strict';

  // The rest of your timeline function code...
  timelines = document.querySelectorAll('.timeline2');

  // ... (the rest of the timeline function remains unchanged)

  // listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", updateLayout);
  window.addEventListener("scroll", callbackFunc);
  for (var h = 0; h < timelines.length; h++) {
    var timeline = timelines[h];
    timeline.addEventListener("scroll", callbackFunc);
  }
}

function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this, args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function callbackFunc() {
  var h, timeline, li, rect, parent_rect, i, items;
  for (h = 0; h < timelines.length; h++) {
    timeline = timelines[h];
    parent_rect = timeline.getBoundingClientRect();
    items = timeline.querySelectorAll(".timeline2 li");
    for (i = 0; i < items.length; i++) {
      /*
      if (isElementInViewport(items[i])) {
      items[i].classList.add("in-view");				   
      }
      */
      li = items[i];
      rect = li.getBoundingClientRect();

      if ((rect.bottom <= (parent_rect.top + (rect.height / 2))) || (rect.top >= (parent_rect.bottom - (rect.height / 2)))) {
        //debugger;
        //li.style['background']='red';
        li.classList.remove("in-view");

      } else {
        //li.style['background']='white';
        li.classList.add("in-view");
      }

    }
  }
}

var updateLayout = debounce(function (e) {
  // ... (updateLayout code remains unchanged)
}, 500);

const toggleButton = document.getElementById('collapsed-nav-link');
const navbarLinks = document.getElementById('navbar-links');

$(document).ready(function () {


  $('#about').show();
  $('nav a[href="#about"]').addClass('active');
  initializeTimeline();
  $('nav a').click(function (event) {
    const viewportWidth = window.innerWidth;
    if (navbarLinks.style.display === 'flex' && viewportWidth <= 1078) {
      navbarLinks.style.display = 'none';
      toggleButton.style.display = 'block'
    }
    event.preventDefault();
    $('nav a').removeClass('active');
    $(this).addClass('active');
    $('section').hide();
    var section = $($(this).attr('href'));
    section.show();
    console.log((section.is('#work')))
    if (section.is('#work')) {
      callbackFunc();
    }
  });
});

window.addEventListener('resize', function () {
  const viewportWidth = window.innerWidth;
  if (viewportWidth > 1078) {
    navbarLinks.style.display = 'flex';
    toggleButton.style.display = 'none'

  } else {
    navbarLinks.style.display = 'none';
    toggleButton.style.display = 'block'
  }
});

// Original code by Joshy Francis
// CodePen: https://codepen.io/joshyfrancis/pen/KePdEN
var timelines;
function initializeTimeline() {
  'use strict';
  timelines = document.querySelectorAll('.timeline2');
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
      li = items[i];
      rect = li.getBoundingClientRect();
      if ((rect.bottom <= (parent_rect.top + (rect.height / 2))) || (rect.top >= (parent_rect.bottom - (rect.height / 2)))) {
        li.classList.remove("in-view");
      } else {
        li.classList.add("in-view");
      }

    }
  }
}

var updateLayout = debounce(function (e) {
}, 500);



toggleButton.addEventListener('click', () => {
  if (navbarLinks.style.display === 'none' || navbarLinks.style.display === '') {
    navbarLinks.style.display = 'flex';
    toggleButton.style.display = 'none'
  } else {
    navbarLinks.style.display = 'none';
    toggleButton.style.display = 'block'
  }
});
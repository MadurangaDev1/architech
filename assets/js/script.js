// Add event listener for scroll and touchmove events
$(window).on('scroll touchmove', function() {
  // Check the scroll position
  var scrollPosition = $(this).scrollTop();

  // Add or remove the class accordingly
  if (scrollPosition > 100) {
    $('.navbar').addClass('scrolled');
  } else {
    $('.navbar').removeClass('scrolled');
  }
});

// Optional: Add a debounce function to prevent excessive function calls
function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

// Usage with debounce function
var scrollHandler = debounce(function() {
  var scrollPosition = $(window).scrollTop();
  if (scrollPosition > 100) {
    $('.navbar').addClass('scrolled');
  } else {
    $('.navbar').removeClass('scrolled');
  }
}, 10); // Adjust the debounce time to your needs

$(window).on('scroll touchmove', scrollHandler);

  // Enable dropdowns
var dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'));
var dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
  return new bootstrap.Dropdown(dropdownToggleEl);
});

// Enable dropdowns
$('.dropdown-toggle').dropdown();


// Get the button and mobile menu elements
const button = document.querySelector('.navbar-toggler');
const mobileMenu = document.querySelector('.mobile-menu');

// Add an event listener to the button
button.addEventListener('click', () => {
  // Toggle the 'show' class on the mobile menu
  mobileMenu.classList.toggle('show');
});


// Get the close button element
const closeButton = document.querySelector('.navbar-toggler-close');

// Add an event listener to the close button
closeButton.addEventListener('click', () => {
  // Get the mobile menu element
  const mobileMenu = document.querySelector('.mobile-menu');

  // Remove the 'show' class from the mobile menu
  mobileMenu.classList.remove('show');
});
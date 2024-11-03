// Get the navbar
const navbar = document.getElementById('navbar');

// Set the initial padding
const initialPadding = 'py-7';
const scrolledPadding = 'py-2';

// Add scroll event listener
window.addEventListener('scroll', function () {
  if (window.scrollY > 50) {
    navbar.classList.remove(initialPadding);
    navbar.classList.add(scrolledPadding);
    navbar.classList.add('fixed', 'top-0', 'w-full', 'z-10', 'shadow-lg');
  } else {
    navbar.classList.remove(scrolledPadding);
    navbar.classList.add(initialPadding);
    navbar.classList.remove('fixed', 'top-0', 'w-full', 'z-10', 'shadow-lg');
  }
});

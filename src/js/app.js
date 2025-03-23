import 'bootstrap';

document.addEventListener("DOMContentLoaded", function () {
  const currentUrl = window.location.pathname.replace('/', '');
  document.querySelectorAll('header .nav-link').forEach(function (link) {
    if (currentUrl.startsWith(link.getAttribute('href'))) {
      link.classList.add("active");
    }
  });
});


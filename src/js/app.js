import 'bootstrap';

document.addEventListener("DOMContentLoaded", function () {
  const currentUrl = window.location.pathname.split('/')[1];
  document.querySelectorAll('header .nav-link').forEach(function (link) {
    if (currentUrl.startsWith(link.getAttribute('href'))) {
      link.classList.add("active");
    }
  });
});


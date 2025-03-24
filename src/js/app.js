import 'bootstrap';

document.addEventListener("DOMContentLoaded", function () {
  headerLinks();
});

function headerLinks() {
  const currentUrl = window.location.pathname.split('/')[1];

  if (!currentUrl) {
    document.querySelector('header .nav-link').classList.add("active");
    return;
  }

  document.querySelectorAll('header .nav-link').forEach(function (link) {
    if (currentUrl.startsWith(link.getAttribute('href'))) {
      link.classList.add("active");
    }
  });
}

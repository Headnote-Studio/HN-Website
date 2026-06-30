/* Headnote Studio — site JavaScript
   Kept deliberately small: mobile menu toggle + dynamic copyright year.
   Cache-busted via ?v= in each page's <script> tag. */

function toggleMobileMenu() {
  var links = document.getElementById('navLinks');
  if (links) { links.classList.toggle('open'); }
}

document.addEventListener('DOMContentLoaded', function () {
  // Set current year in any element with class "year"
  var years = document.querySelectorAll('.year');
  var now = String(new Date().getFullYear());
  years.forEach(function (el) { el.textContent = now; });

  // Close the mobile menu when a link is tapped
  var nav = document.getElementById('navLinks');
  if (nav) {
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { nav.classList.remove('open'); });
    });
  }
});

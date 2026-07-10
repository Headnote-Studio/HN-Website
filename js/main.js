/* Headnote Studio — site JavaScript (v3 "The Verdict")
   Mobile menu, dynamic year, ticker loop, scroll-reveal.
   Kept small, dependency-free. Cache-busted via ?v= in each page. */

function toggleMobileMenu() {
  var links = document.getElementById('navLinks');
  if (links) { links.classList.toggle('open'); }
}

document.addEventListener('DOMContentLoaded', function () {
  // Current year
  var now = String(new Date().getFullYear());
  document.querySelectorAll('.year').forEach(function (el) { el.textContent = now; });

  // Close mobile menu on link tap
  var nav = document.getElementById('navLinks');
  if (nav) {
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { nav.classList.remove('open'); });
    });
  }

  // Ticker: duplicate track content once so the loop is seamless
  document.querySelectorAll('.ticker-track').forEach(function (track) {
    track.innerHTML += track.innerHTML;
  });

  // Scroll reveal (respects prefers-reduced-motion via CSS)
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var items = document.querySelectorAll('.reveal');
  if (!reduced && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('visible'); });
  }
});

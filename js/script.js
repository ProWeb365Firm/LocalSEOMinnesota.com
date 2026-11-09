// ==========================================================
// script.js — site-wide behavior (currently: mobile nav toggle)
// Loaded once via footer.php, so it runs on every page.
// ==========================================================
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('navToggle');
  const nav = document.getElementById('primaryNav');

  if (!toggle || !nav) return;

  toggle.addEventListener('click', function () {
    const isOpen = nav.classList.toggle('is-open');
    toggle.classList.toggle('is-open', isOpen);
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Close the mobile menu if the window is resized back to desktop width
  window.addEventListener('resize', function () {
    if (window.innerWidth > 900 && nav.classList.contains('is-open')) {
      nav.classList.remove('is-open');
      toggle.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });

  // Services submenu: on mobile, tapping the caret expands/collapses
  // the dropdown instead of navigating; tapping the rest of the link
  // still goes to the Services page as normal.
  document.querySelectorAll('.has-submenu > a').forEach(function (link) {
    var caret = link.querySelector('.submenu-caret');
    if (!caret) return;

    caret.addEventListener('click', function (e) {
      if (window.innerWidth <= 900) {
        e.preventDefault();
        e.stopPropagation();
        link.closest('.has-submenu').classList.toggle('is-open');
      }
    });
  });
});

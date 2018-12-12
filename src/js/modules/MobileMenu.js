export function toggleMobile() {
  const menuIcon = document.querySelector('.hamburger-container');
  const mobileMenu = document.querySelector('.mobile-menu-container');
  const icon = document.querySelector('.navigation-icon');

  menuIcon.addEventListener('click', function() {
    mobileMenu.classList.toggle('open');
    icon.classList.toggle('toggled');
  });
}

const navToggleBtn = document.querySelector('.navbar-toggler');
const navCollapseDiv = document.querySelector('navbar-collapse');

navToggleBtn.addEventListener('click', () => {
  navCollapseDiv.classList.toggle('showNavbar');
});
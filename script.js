const navLinks = document.querySelector('.nav-links')
const navToggle = document.querySelector('.nav-hamburger')

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active')
  navToggle.classList.toggle('active')
})

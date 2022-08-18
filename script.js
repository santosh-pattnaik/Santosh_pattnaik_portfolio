const header = document.querySelector('header')

window.addEventListener('scroll', function () {
  header.classList.toggle('sticky', window.scrollY > 0)
})

let menu = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')
let ul = document.querySelector('ul')

menu.onclick = () => {
  menu.classList.toggle('bx-x')
  // navbar.classList.toggle('active')
  navbar.style.display = 'block'
}
window.onscroll = () => {
  menu.classList.remove('bx-x')
  // navbar.classList.remove('active')
  navbar.style.display = 'none'
}

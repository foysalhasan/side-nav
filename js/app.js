const sideNav = document.querySelector('.side-nav')
const navItems = document.querySelectorAll('.side-nav__item')

const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

// TOGGLE SIDE BAR
navToggle.addEventListener('click', function () {
  sideNav.classList.toggle('active')
})

navClose.addEventListener('click', function () {
  sideNav.classList.remove('active')
})

// SLIDE NAV ITEM
sideNav.addEventListener('click', function (e) {
  const navItem = e.target.closest('.side-nav__item')
  const back = e.target.closest('.back')
  if (navItem) {
    navItems.forEach((item) => {
      item.classList.remove('active')
      console.log(item)
    })
    navItem.classList.add('active')
  }
  if (back) {
    navItem.classList.remove('active')
  }
})

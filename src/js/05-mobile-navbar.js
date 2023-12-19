;(function () {
  'use strict'
  console.log('mobile navbar')

  var navbarBurger = document.querySelector('.navbar-burger')
  if (!navbarBurger) return
  navbarBurger.addEventListener('click', toggleNavbarMenu.bind(navbarBurger))

  function toggleNavbarMenu (e) {
    e.stopPropagation() // trap event
    document.documentElement.classList.toggle('is-clipped--navbar')
    this.classList.toggle('is-active')
    var menu = document.getElementById(this.dataset.target)
    if (menu.classList.toggle('is-active')) {
      menu.style.maxHeight = ''
      var expectedMaxHeight = window.innerHeight - Math.round(menu.getBoundingClientRect().top)
      var actualMaxHeight = parseInt(window.getComputedStyle(menu).maxHeight, 10)
      if (actualMaxHeight !== expectedMaxHeight) menu.style.maxHeight = expectedMaxHeight + 'px'
    }
  }

  // window.addEventListener('resize', removePadding)
  // function removePadding () {
  //   var sectionBody = document.querySelector('.sections-body')
  //   if (sectionBody) {
  //     console.log('section-body')
  //     if (window.innerWidth < 800) {
  //       console.log('below 600')
  //       var body = document.querySelector('.sections-body')
  //       body.style.paddingTop = ''
  //     } else {
  //       body.style.paddingTop = '3.5rem'
  //     }
  //   } else {
  //     console.log('section-body not found')
  //   }
  // }
})()

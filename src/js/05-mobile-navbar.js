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

  const header = document.querySelector('header')
  const navbarToggle = document.querySelector('.nav-toggle')
  const sectionBody = document.querySelector('.sections-body')
  const toolbar = document.querySelector('.toolbar')

  if (!navbarToggle) return

  navbarToggle.addEventListener('click', toggleMobileNav)

  function toggleMobileNav (e) {
    e.stopPropagation()
    document.documentElement.classList.toggle('is-clipped--navbar')
    this.classList.toggle('is-active')
    const menuId = this.dataset.target
    const menu = document.getElementById(menuId)
    if (menu) {
      menu.classList.toggle('is-active')
      if (menu.classList.contains('is-active')) {
        adjustMenuHeight(menu)
      } else {
        menu.style.maxHeight = ''
      }
    }
  }

  function adjustMenuHeight (menu) {
    const expectedMaxHeight = window.innerHeight - menu.getBoundingClientRect().top
    const actualMaxHeight = parseInt(window.getComputedStyle(menu).maxHeight, 10)
    if (actualMaxHeight !== expectedMaxHeight) {
      menu.style.maxHeight = expectedMaxHeight + 'px'
    }
  }

  if (!sectionBody) return

  let windowWidth = window.innerWidth
  adjustLayoutForWindowSize(windowWidth)

  window.addEventListener('resize', function () {
    const newWindowWidth = window.innerWidth
    if (newWindowWidth !== windowWidth) {
      windowWidth = newWindowWidth
      adjustLayoutForWindowSize(windowWidth)
    }
  })

  function adjustLayoutForWindowSize (windowWidth) {
    if (windowWidth < 1024) {
      removeHeaderAndAdjustPadding()
    } else {
      restoreHeaderAndAdjustPadding()
    }
  }

  function removeHeaderAndAdjustPadding () {
    if (header && document.body.contains(header)) {
      header.remove()
      document.body.style.paddingTop = '0'
      if (toolbar) toolbar.style.top = '0'
    }
  }

  function restoreHeaderAndAdjustPadding () {
    if (header && !document.body.contains(header)) {
      document.body.insertBefore(header, document.body.firstChild)
      document.body.style.paddingTop = '3.5rem'
      if (toolbar) toolbar.style.top = '3.5rem'
    }
  }
})()

;(function () {
  'use strict'

  document.addEventListener('keydown', function (event) {
    var tab = event.target.closest('[role="tab"]')
    if (!tab || !tab.parentElement || tab.parentElement.getAttribute('role') !== 'tablist') return

    var tabs = Array.prototype.slice.call(tab.parentElement.children)
    var index = tabs.indexOf(tab)
    if (event.key === 'ArrowRight') index = (index + 1) % tabs.length
    else if (event.key === 'ArrowLeft') index = (index + tabs.length - 1) % tabs.length
    else if (event.key === 'Home') index = 0
    else if (event.key === 'End') index = tabs.length - 1
    else return

    event.preventDefault()
    tabs[index].focus()
    tabs[index].click()
  })
})()

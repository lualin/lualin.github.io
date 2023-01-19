document
  .getElementsByClassName('toggle')[0]
  .addEventListener('click', function () {
    'use strict'
    $('nav ul').slideToggle()
  })

window.addEventListener('resize', function () {
  'use strict'
  if (window.innerWidth > 768) {
    $('nav ul').removeAttr('style')
  }
})

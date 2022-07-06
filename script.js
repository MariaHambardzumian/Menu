let menu = document.querySelector('#menu')
let menuList = document.querySelector('.menu-list')
let close = document.querySelector('#close')


menu.addEventListener('click', () =>
    menuList.classList.toggle('show')
)
close.addEventListener('click', () =>
    menuList.classList.toggle('show')
)
let navLink = document.querySelectorAll('.mobile .nav-link-item')
let hamburger = document.querySelector('.hamburger')
let menu = document.querySelector('.mobile')

hamburger.addEventListener('click', e => {
    menu.classList.toggle('show')
    document.body.classList.toggle('overlay')
})

navLink.forEach(el => {
    el.addEventListener('click', e => {
        menu.classList.remove('show')
        document.body.classList.remove('overlay')
    })
})



const menuButton = document.querySelector('.menuButton')
const mobileMenu = document.querySelector('.header-nav')
const closeMenuButton = document.querySelector('.closeMenu')

menuButton.addEventListener('click', function () {
    mobileMenu.classList.add('show');
})

closeMenuButton.addEventListener('click', function () {
        mobileMenu.classList.remove('show');
    }
)
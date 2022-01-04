document.querySelector('#times_menu').addEventListener('click', () => {
    document.querySelector('.nav_links').classList.remove('navbar_responsive');
})

document.querySelector('.menu_icon').addEventListener('click', () => {
    document.querySelector('.nav_links').classList.add('navbar_responsive');
})
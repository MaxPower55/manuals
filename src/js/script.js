var mobileMenuBtn = document.querySelector('.mobile_menu_btn');
function showMenu() {
    var mobileMenu = document.querySelector('.mobile_menu');
    mobileMenu.classList.toggle('mobile_menu-active');
    mobileMenuBtn.classList.toggle('menu_btn-active');
}
mobileMenuBtn.addEventListener('click', showMenu, false);
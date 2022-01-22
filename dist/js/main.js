const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('navbar');
const menuNav = document.querySelector('.navbar-collapse');
const navItems = document.querySelectorAll('.menu-nav__item');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if(!showMenu) {
    hamburger.classList.add('open');
    menuNav.classList.add('show');
    navItems.forEach(item => item.classList.add('open'));

    showMenu = true;
  } else {
    hamburger.classList.remove('open');
    menuNav.classList.remove('show');
    navItems.forEach(item => item.classList.remove('open'));

    showMenu = false;
  }
}

/*************** */

window.onscroll = function() {myFunction()};

var navbar = document.getElementsByClassName("navbar");
var sticky = navbar[0].offsetTop;
function myFunction() {
  if (window.pageYOffset > sticky) {
    navbar[0].classList.add("sticky")
    
  } else {
    navbar[0].classList.remove("sticky");
  }
}

/**************************/
$('#navbarDropdown').click(function(){
  if ($('.dropdown-toggle').hasClass('dropdown-toggle-up')) {
    $('.dropdown-toggle').removeClass('dropdown-toggle-up')
  }else{
    $('.dropdown-toggle').addClass('dropdown-toggle-up')
  }
})
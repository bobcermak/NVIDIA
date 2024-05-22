/*Header*/

document.addEventListener('DOMContentLoaded', function() {
    let lastScrollY = window.scrollY;
    const header = document.querySelector('header');

    window.addEventListener('scroll', function() {
        if (window.scrollY < lastScrollY) {
            // Rolování nahoru
            header.classList.remove('header-hidden');
        } else {
            // Rolování dolů
            header.classList.add('header-hidden');
        }
        lastScrollY = window.scrollY;
    });
});


//Hamburger menu//

document.addEventListener('DOMContentLoaded', function () {
    const navbarBurger = document.querySelector('.navbar-burger');
    const navbarMenu = document.querySelector('.navbar-menu');
    const navbarClose = document.querySelector('.navbar-close');
    const navbarBackdrop = document.querySelector('.navbar-backdrop');

    function toggleNavbarMenu() {
        navbarMenu.classList.toggle('hidden');
        navbarBackdrop.classList.toggle('hidden');
        document.body.classList.toggle('overflow-hidden');
    }


    navbarBurger.addEventListener('click', function () {
        toggleNavbarMenu();
    });

    navbarClose.addEventListener('click', function () {
        toggleNavbarMenu();
    });

  
    navbarBackdrop.addEventListener('click', function () {
        toggleNavbarMenu();
    });
});

//SLider

var swiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    allowTouchMove: false, // Disable swipe
});

// Contact us

const form = document.getElementById('contactForm');
form.addEventListener('submit', function(event) {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (!name || !email || !message) {
    event.preventDefault(); // Prevent form submission
    alert('Prosím vyplňte všechna povinná pole.'); // Display alert message
  }
});


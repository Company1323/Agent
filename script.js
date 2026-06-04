    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.navbar');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });


    const wrapper = document.querySelector('.card-swiper');
const leftBtn = document.querySelector('.swiper-button-left');
const rightBtn = document.querySelector('.swiper-button-right');

const slideWidth = document.querySelector('.swiper-slide').offsetWidth + 16; // فاصله بین اسلایدها

leftBtn.addEventListener('click', () => {
    wrapper.scrollBy({ left: -slideWidth, behavior: 'smooth' });
});

rightBtn.addEventListener('click', () => {
    wrapper.scrollBy({ left: slideWidth, behavior: 'smooth' });
});


const swiper = new Swiper(".card-swiper", {
    centeredSlides: false,
    spaceBetween: 16,
    slidesPerView: 'auto',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
});

const sliderImages = document.querySelectorAll('.slider__img');
const sliderLine = document.querySelector('.slider__line');
const sliderDots = document.querySelectorAll('.slider__dot');
const prevBtn = document.querySelector('.slider__btn-prev');
const nextBtn = document.querySelector('.slider__btn-next');

let clickCounter = 0;
let sliderWidth;

prevBtn.style.display = 'none';

// when the screen size changes the size of the slider and iimages in it should also change 
window.addEventListener('resize', showSlide);

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

function showSlide() {
    sliderWidth = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = sliderWidth * sliderImages.length + 'px';
    sliderImages.forEach(item => item.style.width = sliderWidth + 'px');

    rollSlider();
}

showSlide();

function nextSlide() {
    clickCounter++;
    if (clickCounter >= sliderImages.length) clickCounter = sliderImages.length - 1;

    rollSlider();
    thisSlide(clickCounter);
    buttonsVisibility();
}

function prevSlide() {
    clickCounter--;
    if (clickCounter < 0) clickCounter = 0;

    rollSlider();
    thisSlide(clickCounter);
    buttonsVisibility();
}

function rollSlider() {
    sliderLine.style.transform = `translateX(${-clickCounter * sliderWidth}px)`;
}

function thisSlide(index) {
    sliderDots.forEach(item => item.classList.remove('slider__active-dot'));
    sliderDots[index].classList.add('slider__active-dot');
}

sliderDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        clickCounter = index;
        rollSlider();
        thisSlide(clickCounter);
        buttonsVisibility();
    });
});

function buttonsVisibility() {
    if (clickCounter === 0) {
        prevBtn.style.display = 'none'; 
        nextBtn.style.display = 'block'; 
    } else if (clickCounter === sliderImages.length - 1) {
        nextBtn.style.display = 'none'; 
        prevBtn.style.display = 'block'; 
    } else {
        prevBtn.style.display = 'block'; 
        nextBtn.style.display = 'block';
    }
}

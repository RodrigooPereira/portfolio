let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.project-box');
    const slider = document.querySelector('#projects-box');
    
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function showNext() {
    showSlide(currentSlide + 1);
}

function showPrev() {
    showSlide(currentSlide - 1);
}
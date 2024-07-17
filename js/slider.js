let currentSlide = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.carousel-slide img');
    const totalSlides = slides.length;

    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }

    const newTransformValue = -currentSlide * 100;
    document.querySelector('.carousel-slide').style.transform = `translateX(${newTransformValue}%)`;
}

function autoSlide() {
    changeSlide(1);
}

setInterval(autoSlide, 3000);

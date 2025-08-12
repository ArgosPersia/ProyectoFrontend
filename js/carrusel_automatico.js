const slides = document.querySelectorAll(".carousel-track img");
let index = 0;

function showSlide(i) {
    slides.forEach((slide, idx) => {
        slide.classList.toggle("active", idx === i);
    });
}

function nextSlide() {
    index++;
    if (index >= slides.length) index = 0;
    showSlide(index);
}

showSlide(index);
setInterval(nextSlide, 4100);
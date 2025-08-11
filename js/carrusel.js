document.querySelectorAll('.carousel').forEach(carousel => {
    let images = carousel.querySelectorAll('img');
    let current = 0;

    function showImage(index) {
        images.forEach((img, i) => img.classList.toggle('active', i === index));
    }

    carousel.querySelector('.prev').onclick = () => {
        current = (current - 1 + images.length) % images.length;
        showImage(current);
    };
    carousel.querySelector('.next').onclick = () => {
        current = (current + 1) % images.length;
        showImage(current);
    };
});
// const inner = document.querySelector('.bigbords-inner');
// const totalSlides = document.querySelectorAll('.bigboards1').length;
// let currentIndex = 0;
//
// const updateCarousel = () => {
//     const carouselWidth = document.querySelector('.bigbords').clientWidth;
//     inner.style.transform = `translateX(-${currentIndex * carouselWidth}px)`;
// };
//
// document.querySelector('.next').addEventListener('click', () => {
//     currentIndex = (currentIndex + 1) % totalSlides;
//     updateCarousel();
// });
//
// document.querySelector('.prev').addEventListener('click', () => {
//     currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
//     updateCarousel();
// });
//
// window.addEventListener('resize', updateCarousel);

document.querySelectorAll('.bigbords').forEach(carousel => {
    const inner = carousel.querySelector('.bigbords-inner');
    const slides = carousel.querySelectorAll('.bigboards1');
    const totalSlides = slides.length;
    let currentIndex = 0;

    const updateCarousel = () => {
        const carouselWidth = carousel.clientWidth;
        inner.style.transform = `translateX(-${currentIndex * carouselWidth}px)`;
    };

    carousel.querySelector('.next').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateCarousel();
    });

    carousel.querySelector('.prev').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateCarousel();
    });

    window.addEventListener('resize', updateCarousel);
    updateCarousel();
});

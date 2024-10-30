document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.text-slide');
    let currentSlide = 0;
    console.log(slides.length)

    function showNextSlide() {
        // Hide current slide
        slides[currentSlide].classList.remove('active');

        // Increment slide index (looping back if needed)
        currentSlide = (currentSlide + 1) % slides.length;

        // Show next slide
        slides[currentSlide].classList.add('active');
    }

    // Set interval for automatic slide transition (every 3 seconds)
    setInterval(showNextSlide, 3000);
});


function togglePopup() {
    $(".content").toggle();
}

document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slider img');
    let currentSlide = 0;

    // Function to show the current slide
    function showSlide() {
        // Hide all slides
        slides.forEach(slide => {
            slide.style.display = 'none';
        });
        // Show the current slide
        slides[currentSlide].style.display = 'block';
    }

    // Show the initial slide
    showSlide();

    // Function to handle clicking on Next button
    document.getElementById('nextBtn').addEventListener('click', function (event) {
        // Prevent the default action of the button click
        event.preventDefault();
        // Move to the next slide
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide();
    });

    // Function to handle clicking on Previous button
    document.getElementById('prevBtn').addEventListener('click', function (event) {
        // Prevent the default action of the button click
        event.preventDefault();
        // Move to the previous slide
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide();
    });
});

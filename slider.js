// Array of mockup images
const mockupImages = [
    'img/Mockup1.png',
    'img/mockup2.png',
];

let currentImageIndex = 0;

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const mockupImage = document.querySelector('.phone-mockup');
    
    // Set interval for automatic slideshow (5 seconds)
    let slideInterval = setInterval(() => changeImage('next'), 5000);

    // Add click event listeners to buttons
    prevBtn.addEventListener('click', () => {
        changeImage('prev');
        // Reset interval when manually changing image
        clearInterval(slideInterval);
        slideInterval = setInterval(() => changeImage('next'), 5000);
    });
    
    nextBtn.addEventListener('click', () => {
        changeImage('next');
        // Reset interval when manually changing image
        clearInterval(slideInterval);
        slideInterval = setInterval(() => changeImage('next'), 5000);
    });

    // Function to change the image
    function changeImage(direction) {
        // Update current index based on direction
        if (direction === 'next') {
            currentImageIndex = (currentImageIndex + 1) % mockupImages.length;
        } else {
            currentImageIndex = (currentImageIndex - 1 + mockupImages.length) % mockupImages.length;
        }

        // Add transition effect
        mockupImage.style.opacity = '0';
        mockupImage.style.transform = 'scale(0.95)';

        // Change image after fade out
        setTimeout(() => {
            mockupImage.src = mockupImages[currentImageIndex];
            mockupImage.style.opacity = '1';
            mockupImage.style.transform = 'scale(1)';
        }, 300);
    }

    // Add transition styles to the mockup image
    mockupImage.style.transition = 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out';
});
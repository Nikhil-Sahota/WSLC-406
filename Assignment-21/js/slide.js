// Get all slide elements
const slides = document.querySelectorAll(".slide");
let counter = 0;

// Position each slide side-by-side using left
slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

// Slide to the correct position
const slideImage = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
};

// Go to the previous slide (loop to last if at first)
const goPrev = () => {
    counter--;
    if (counter < 0) {
        counter = slides.length - 1; // go to last slide
    }
    slideImage();
};

// Go to the next slide (loop to first if at last)
const goNext = () => {
    counter++;
    if (counter >= slides.length) {
        counter = 0; // go to first slide
    }
    slideImage();
};

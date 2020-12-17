const track = document.querySelector(".carousel__track");
const slides = Array.from(track.children);

const nextButton = document.querySelector(".carousel__button--right");
const prevButton = document.querySelector(".carousel__button--left");
const dotsNav = document.querySelector(".carousel__nav");
const dots = Array.from(dotsNav.children);


// getBoundingRect() gives dimensions of the particular slide.
// We are choosing slide[0] to pick the dimensions of the first photo. 
// Once, we have the dimensions of the first image, we'll make the size of the rest of the images to be the same.
// The size of the images cant be fixed in px as the carousel images are within responsive parent element. 

console.log(slides[0].getBoundingClientRect())

const slideWidth = slides[0].getBoundingClientRect().width;

console.log(slideWidth);


//  arrange the slides next to one another 

slides[0].getElementsByClassName.left = 0;

const setSlidePosition = (slide, i) => {
    slide.style.left = slideWidth * i + "px";
};

slides.forEach(setSlidePosition)


// when i click left, move slides to the left

// when I click right, move slides to the right

// when i click the nav indicators, move to that slide
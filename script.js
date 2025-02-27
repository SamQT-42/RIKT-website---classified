document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");

    slides.forEach(slide => {
        slide.addEventListener("click", () => {
            if (slide.classList.contains("left")) {
                shiftSlides("left");
            } else if (slide.classList.contains("right")) {
                shiftSlides("right");
            }
        });
    });

    function shiftSlides(direction) {
        const leftSlide = document.querySelector(".left");
        const centerSlide = document.querySelector(".active");
        const rightSlide = document.querySelector(".right");

        if (direction === "left") {
            leftSlide.classList.replace("left", "active");
            centerSlide.classList.replace("active", "right");
            rightSlide.classList.replace("right", "left");
        } else if (direction === "right") {
            rightSlide.classList.replace("right", "active");
            centerSlide.classList.replace("active", "left");
            leftSlide.classList.replace("left", "right");
        }
    }
});

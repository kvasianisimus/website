
document.addEventListener("DOMContentLoaded", function () {
    const sliderContainer = document.querySelector(".slider-container");

    sliderContainer.addEventListener("wheel", function (event) {

        const delta = Math.sign(event.deltaY);


        if (delta > 0) {

            sliderContainer.scrollLeft += 200; 
        } else {

            sliderContainer.scrollLeft -= 200; 
        }

        event.preventDefault();
    });
});

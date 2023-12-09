let sliderImages = document.querySelectorAll(".slide"),
  arrowLeft = document.querySelector(".left"),
  arrowRight = document.querySelector(".right"),
  current = 0;

  arrowLeft.addEventListener("click", slideLeft)
  arrowRight.addEventListener("click", slideRight)
function resetImages() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
}

function start(current) {
    resetImages()
    sliderImages[current].style.display = "flex";
}

function slideLeft() {
    // resetImages()
    current = (current - 1 + sliderImages.length) % sliderImages.length
    start(current)
}
function slideRight() {
    // resetImages()
    current = (current + 1) % sliderImages.length
    start(current)
}


start(0)
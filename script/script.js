// add class navbarDark on navbar scroll
const header = document.querySelector(".navbar");

window.onscroll = function () {
  var top = window.scrollY;
  if (top >= 0) {
    header.classList.add("navbarDark");
  } else {
    header.classList.remove("navbarDark");
  }
};

// About Me Slideshow
let aboutSlideIndex = 1;
showAboutSlides(aboutSlideIndex);

function plusAboutSlides(n) {
  showAboutSlides((aboutSlideIndex += n));
}

function currentAboutSlide(n) {
  showAboutSlides((aboutSlideIndex = n));
}

function showAboutSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides1");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    aboutSlideIndex = 1;
  }
  if (n < 1) {
    aboutSlideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[aboutSlideIndex - 1].style.display = "block";
  dots[aboutSlideIndex - 1].className += " active";
}

// ROSIE Slideshow
let rosieSlideIndex = 1;
showRosieSlides(rosieSlideIndex);

function plusRosieSlides(n) {
  showRosieSlides((rosieSlideIndex += n));
}

function currentRosieSlide(n) {
  showRosieSlides((rosieSlideIndex = n));
}

function showRosieSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides2");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    rosieSlideIndex = 1;
  }
  if (n < 1) {
    rosieSlideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[rosieSlideIndex - 1].style.display = "block";
  dots[rosieSlideIndex - 1].className += " active";
}

function myFunction() {
  // Get the text field
  var copyText = document.getElementById("myInput");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  alert("Copied the text: " + copyText.value);
}

var slideIndex = 0;
showSlides();

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlidesV2(slideIndex = n);
}

function showSlidesV2(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if(slides.length == 0)
        return;
    var dots = document.getElementsByClassName("dot");

    if (n > slides.length) {slideIndex = 0}
    if (n < 0) {slideIndex = slides.length}

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex].style.display = "block";
    dots[slideIndex].className += " active";
}

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if(slides.length == 0)
        return;
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 3000); // Change image every 2 seconds
}
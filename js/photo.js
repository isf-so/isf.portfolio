var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("custom-slider");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}



function traduirePage() {
    var elements = document.querySelectorAll('[data-francais]');
    elements.forEach(function(element) {
        var traduction = element.getAttribute('data-anglais');
        if (traduction) {
            element.innerHTML = traduction;
        }
    });

    var bouton = document.querySelector('button');
    bouton.innerHTML = "Fr";
    bouton.setAttribute('onclick', 'retraduirePage()');
}

function retraduirePage() {
    var elements = document.querySelectorAll('[data-francais]');
    elements.forEach(function(element) {
        var francais = element.getAttribute('data-francais');
        if (francais) {
            element.innerHTML = francais;
        }
    });

    var bouton = document.querySelector('button');
    bouton.innerHTML = "En";
    bouton.setAttribute('onclick', 'traduirePage()');
}

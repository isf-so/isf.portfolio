


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

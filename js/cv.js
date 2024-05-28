function traduirePage() {
    var elements = document.querySelectorAll('[data-francais]');
    elements.forEach(function (element) {
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
    elements.forEach(function (element) {
        var francais = element.getAttribute('data-francais');
        if (francais) {
            element.innerHTML = francais;
        }
    });

    var bouton = document.querySelector('button');
    bouton.innerHTML = "En";
    bouton.setAttribute('onclick', 'traduirePage()');
}




document.getElementById('partager').addEventListener('click', function() {
    const lien = 'https://isf-so.github.io/isf.portfolio/index.html'; // Remplacez par le lien que vous voulez copier
    navigator.clipboard.writeText(lien).then(function() {
        const messageDiv = document.getElementById('message');
        messageDiv.style.display = 'block';
        setTimeout(function() {
            messageDiv.style.display = 'none';
        }, 2000); // Cache le message après 2 secondes
    }, function(err) {
        console.error('Erreur lors de la copie du lien : ', err);
    });
});















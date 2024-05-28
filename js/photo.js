// Fonction pour compresser les images
function compresserImages() {
    // Sélectionnez tous les éléments <img> sur votre page
    const images = document.querySelectorAll('img');

    // Parcourez chaque image et comprimez-la
    images.forEach(image => {
        // Créez une nouvelle instance de ImageCompressor
        const compressor = new ImageCompressor();

        // Utilisez la méthode compress() pour compresser l'image
        compressor.compress(image, {
            quality: 0.6, // qualité de compression entre 0 et 1
            success(result) {
                // Lorsque la compression réussit, remplacez l'image d'origine par l'image compressée
                image.src = result;
            },
            error(e) {
                // En cas d'erreur lors de la compression, affichez un message d'erreur dans la console
                console.error('Erreur lors de la compression de l\'image:', e);
            }
        });
    });
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

document.querySelector('button').addEventListener("click", )
    













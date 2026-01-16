// Smooth scroll and interactions
document.addEventListener('DOMContentLoaded', function() {
    // Hamburger menu toggle
    const hamburger = document.querySelector('.hamburger');
    const fullscreenMenu = document.querySelector('.fullscreen-menu');
    const menuClose = document.querySelector('.menu-close');
    const navLinks = document.querySelectorAll('.fullscreen-menu .nav-links a');
    const body = document.body;

    function closeMenu() {
        hamburger.classList.remove('active');
        fullscreenMenu.classList.remove('active');
        body.style.overflow = '';
    }

    if (hamburger && fullscreenMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            fullscreenMenu.classList.toggle('active');
            body.style.overflow = fullscreenMenu.classList.contains('active') ? 'hidden' : '';
        });

        // Close menu with close button
        if (menuClose) {
            menuClose.addEventListener('click', closeMenu);
        }

        // Close menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });

        // Close menu when clicking outside (on the menu background)
        fullscreenMenu.addEventListener('click', function(e) {
            if (e.target === fullscreenMenu) {
                closeMenu();
            }
        });
    }


    // Add smooth transitions on page load
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
        mainContent.style.opacity = '0';
        mainContent.style.transition = 'opacity 0.6s ease';
        
        setTimeout(() => {
            mainContent.style.opacity = '1';
        }, 100);
    }

    // Gallery item interactions
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.borderColor = 'rgba(255, 255, 255, 0.3)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.borderColor = 'rgba(255, 255, 255, 0.1)';
        });
    });

    // Alignement des traits de construction avec les lignes de texte
    window.alignConstructionLines = function() {
        const line1 = document.querySelector('.construction-lines .line-1.horizontal');
        const line2 = document.querySelector('.construction-lines .line-2.horizontal');
        const line3 = document.querySelector('.construction-lines .line-3.horizontal');
        const line4 = document.querySelector('.construction-lines .line-4.vertical');
        const line5 = document.querySelector('.construction-lines .line-5.vertical');
        const line6 = document.querySelector('.construction-lines .line-6.vertical');
        
        // Vérifier si on est sur la page contact
        const isContactPage = document.body.classList.contains('contact-page');
        // Vérifier si on est sur la page vidéo
        const isVideoPage = window.location.pathname.includes('video.html');
        
        if (isVideoPage) {
            // Aligner avec le titre de la page
            const pageTitle = document.querySelector('.page-title');
            if (pageTitle && line1) {
                const rect = pageTitle.getBoundingClientRect();
                const firstLine = rect.top + window.scrollY;
                line1.style.top = firstLine + 'px';
            }
            
            // Aligner avec le sous-titre
            const pageSubtitle = document.querySelector('.page-subtitle');
            if (pageSubtitle && line2) {
                const rect = pageSubtitle.getBoundingClientRect();
                const firstLine = rect.top + window.scrollY;
                line2.style.top = firstLine + 'px';
            }
            
            // Aligner avec la première création vidéo
            const firstGalleryItem = document.querySelector('.gallery-item');
            if (firstGalleryItem && line3) {
                const rect = firstGalleryItem.getBoundingClientRect();
                const firstLine = rect.top + window.scrollY;
                line3.style.top = firstLine + 'px';
            }
            
            // Aligner les lignes verticales avec le contenu
            const mainContent = document.querySelector('.main-content');
            if (mainContent) {
                const contentRect = mainContent.getBoundingClientRect();
                const contentTop = contentRect.top + window.scrollY;
                const contentBottom = contentRect.bottom + window.scrollY;
                const contentHeight = contentBottom - contentTop;
                
                if (line4) {
                    line4.style.top = contentTop + 'px';
                    line4.style.height = contentHeight + 'px';
                }
                if (line5) {
                    line5.style.top = contentTop + 'px';
                    line5.style.height = contentHeight + 'px';
                }
                if (line6) {
                    line6.style.top = contentTop + 'px';
                    line6.style.height = contentHeight + 'px';
                }
            }
        } else if (isContactPage) {
            // Aligner avec le titre de la page
            const pageTitle = document.querySelector('.page-title');
            if (pageTitle && line1) {
                const rect = pageTitle.getBoundingClientRect();
                const firstLine = rect.top + window.scrollY;
                line1.style.top = firstLine + 'px';
            }
            
            // Aligner avec le texte d'intro
            const contactIntroText = document.querySelector('.contact-intro-text');
            if (contactIntroText && line2) {
                const rect = contactIntroText.getBoundingClientRect();
                const firstLine = rect.top + window.scrollY;
                line2.style.top = firstLine + 'px';
            }
            
            // Aligner avec le bouton email
            const emailButton = document.querySelector('.contact-email-button');
            if (emailButton && line3) {
                const rect = emailButton.getBoundingClientRect();
                const firstLine = rect.top + window.scrollY;
                line3.style.top = firstLine + 'px';
            }
            
            // Aligner les lignes verticales avec le contenu
            const mainContent = document.querySelector('.main-content');
            if (mainContent) {
                const contentRect = mainContent.getBoundingClientRect();
                const contentTop = contentRect.top + window.scrollY;
                const contentBottom = contentRect.bottom + window.scrollY;
                const contentHeight = contentBottom - contentTop;
                
                if (line4) {
                    line4.style.top = contentTop + 'px';
                    line4.style.height = contentHeight + 'px';
                }
                if (line5) {
                    line5.style.top = contentTop + 'px';
                    line5.style.height = contentHeight + 'px';
                }
                if (line6) {
                    line6.style.top = contentTop + 'px';
                    line6.style.height = contentHeight + 'px';
                }
            }
        } else {
            // Aligner avec la première ligne du titre hero
            const heroTitle = document.querySelector('.hero-title');
            if (heroTitle && line1) {
                const rect = heroTitle.getBoundingClientRect();
                const computedStyle = window.getComputedStyle(heroTitle);
                const lineHeight = parseFloat(computedStyle.lineHeight);
                const firstLine = rect.top + window.scrollY;
                line1.style.top = firstLine + 'px';
            }
            
            // Aligner avec la première ligne de texte de l'intro
            const introText = document.querySelector('.intro-text');
            if (introText && line2) {
                const rect = introText.getBoundingClientRect();
                const firstLine = rect.top + window.scrollY;
                line2.style.top = firstLine + 'px';
            }
            
            // Aligner avec la première ligne de texte des work cards
            const firstWorkCard = document.querySelector('.work-card');
            if (firstWorkCard && line3) {
                const workTitle = firstWorkCard.querySelector('.work-title');
                if (workTitle) {
                    const rect = workTitle.getBoundingClientRect();
                    const firstLine = rect.top + window.scrollY;
                    line3.style.top = firstLine + 'px';
                }
            }
        }
    }
    
    // Chargement dynamique des créations vidéo
    loadVideoCreations();
    
    // Chargement dynamique des projets photo et graphisme
    loadPhotoGraphismeProjects();
    
    // Appeler la fonction au chargement et au redimensionnement
    setTimeout(window.alignConstructionLines, 100);
    window.addEventListener('resize', function() {
        setTimeout(window.alignConstructionLines, 50);
    });
    
    // Chargement des détails de création si on est sur la page de détail
    loadCreationDetail();
    
    // Initialisation du carrousel infini
    initTrustCarousel();
});

// Fonction pour initialiser le carrousel "Ils m'ont fait confiance"
function initTrustCarousel() {
    const carouselTrack = document.querySelector('.trust-carousel-track');
    
    if (!carouselTrack) {
        return;
    }
    
    // S'assurer que le carrousel fonctionne correctement
    // L'animation CSS gère déjà le défilement infini
    // On peut ajouter ici des interactions supplémentaires si nécessaire
    
    // Pause au survol (optionnel)
    const carouselWrapper = document.querySelector('.trust-carousel-wrapper');
    if (carouselWrapper) {
        carouselWrapper.addEventListener('mouseenter', function() {
            carouselTrack.style.animationPlayState = 'paused';
        });
        
        carouselWrapper.addEventListener('mouseleave', function() {
            carouselTrack.style.animationPlayState = 'running';
        });
    }
}

// Fonction pour extraire l'ID d'une vidéo YouTube depuis l'URL
function extractYouTubeId(url) {
    let videoId = '';
    
    // Format: https://www.youtube.com/watch?v=VIDEO_ID
    if (url.includes('youtube.com/watch?v=')) {
        videoId = url.split('v=')[1].split('&')[0];
    }
    // Format: https://youtu.be/VIDEO_ID
    else if (url.includes('youtu.be/')) {
        videoId = url.split('youtu.be/')[1].split('?')[0];
    }
    
    return videoId;
}

// Fonction pour charger et afficher les créations vidéo
async function loadVideoCreations() {
    const galleryGrid = document.querySelector('.gallery-grid');
    
    // Vérifier si on est sur la page vidéo
    if (!galleryGrid || !window.location.pathname.includes('video.html')) {
        return;
    }
    
    try {
        // Charger le fichier JSON
        const response = await fetch('creations.json');
        if (!response.ok) {
            throw new Error('Erreur lors du chargement des créations');
        }
        
        const data = await response.json();
        const creations = data.creations || [];
        
        // Vider la galerie existante
        galleryGrid.innerHTML = '';
        
        // Créer un élément pour chaque création
        creations.forEach(creation => {
            if (creation.type === 'video' && creation.platform === 'youtube') {
                const videoId = extractYouTubeId(creation.url);
                
                if (videoId) {
                    // Créer un lien vers la page de détail
                    const galleryItemLink = document.createElement('a');
                    galleryItemLink.href = `creation-detail.html?id=${creation.id}`;
                    galleryItemLink.className = 'gallery-item has-video';
                    
                    // Créer un conteneur pour la miniature
                    const videoContainer = document.createElement('div');
                    videoContainer.className = 'video-container';
                    
                    // Créer la miniature YouTube
                    const thumbnail = document.createElement('img');
                    thumbnail.className = 'video-thumbnail';
                    thumbnail.src = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
                    thumbnail.alt = creation.title;
                    thumbnail.onerror = function() {
                        // Si maxresdefault n'existe pas, utiliser hqdefault
                        this.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                    };
                    
                    videoContainer.appendChild(thumbnail);
                    
                    // Créer le titre de la vidéo
                    const videoTitle = document.createElement('h3');
                    videoTitle.className = 'video-title';
                    videoTitle.textContent = creation.title;
                    
                    // Créer la date de création
                    const videoDate = document.createElement('p');
                    videoDate.className = 'video-date';
                    videoDate.textContent = creation.date || 'Date non spécifiée';
                    
                    galleryItemLink.appendChild(videoContainer);
                    galleryItemLink.appendChild(videoTitle);
                    galleryItemLink.appendChild(videoDate);
                    
                    galleryGrid.appendChild(galleryItemLink);
                }
            }
        });
        
        // Réappliquer les interactions sur les nouveaux éléments
        const newGalleryItems = document.querySelectorAll('.gallery-item');
        newGalleryItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.style.borderColor = 'rgba(255, 255, 255, 0.3)';
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.borderColor = 'rgba(255, 255, 255, 0.1)';
            });
        });
        
        // Réaligner les traits de construction après le chargement des créations
        if (window.location.pathname.includes('video.html') && window.alignConstructionLines) {
            setTimeout(() => {
                window.alignConstructionLines();
            }, 100);
        }
        
    } catch (error) {
        console.error('Erreur lors du chargement des créations:', error);
        // Afficher un message d'erreur dans la galerie
        if (galleryGrid) {
            galleryGrid.innerHTML = '<div class="gallery-item"><p class="placeholder-text">Erreur lors du chargement des créations</p></div>';
        }
    }
}

// Fonction pour charger les projets photo et graphisme
async function loadPhotoGraphismeProjects() {
    const galleryGrid = document.querySelector('#gallery-grid');
    
    // Vérifier si on est sur la page photographie ou graphisme
    if (!galleryGrid || (!window.location.pathname.includes('photographie.html') && !window.location.pathname.includes('graphisme.html'))) {
        return;
    }
    
    try {
        // Charger le fichier JSON
        const response = await fetch('projets.json');
        if (!response.ok) {
            throw new Error('Erreur lors du chargement des projets');
        }
        
        const data = await response.json();
        const projets = data.projets || [];
        
        // Déterminer le type de page
        const pageType = window.location.pathname.includes('photographie.html') ? 'photo' : 'graphisme';
        
        // Vider la galerie existante
        galleryGrid.innerHTML = '';
        
        // Créer un élément pour chaque projet du type correspondant
        projets.forEach(projet => {
            if (projet.type === pageType) {
                // Créer un lien vers la page de détail
                const galleryItemLink = document.createElement('a');
                galleryItemLink.href = `creation-detail.html?id=${projet.id}&type=${projet.type}`;
                galleryItemLink.className = 'gallery-item';
                
                // Créer l'image
                const image = document.createElement('img');
                image.src = projet.image;
                image.alt = projet.title;
                
                // Créer le conteneur d'info
                const infoContainer = document.createElement('div');
                infoContainer.className = 'gallery-item-info';
                
                // Créer la date
                const date = document.createElement('p');
                date.className = 'gallery-item-date';
                date.textContent = projet.date || '2024';
                
                // Créer le titre
                const title = document.createElement('h3');
                title.className = 'gallery-item-title';
                title.textContent = projet.title;
                
                infoContainer.appendChild(date);
                infoContainer.appendChild(title);
                
                galleryItemLink.appendChild(image);
                galleryItemLink.appendChild(infoContainer);
                
                galleryGrid.appendChild(galleryItemLink);
            }
        });
        
        // Réappliquer les interactions sur les nouveaux éléments
        const newGalleryItems = document.querySelectorAll('.gallery-item');
        newGalleryItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.style.borderColor = 'rgba(255, 255, 255, 0.3)';
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.borderColor = 'rgba(255, 255, 255, 0.1)';
            });
        });
        
    } catch (error) {
        console.error('Erreur lors du chargement des projets:', error);
        // Afficher un message d'erreur dans la galerie
        if (galleryGrid) {
            galleryGrid.innerHTML = '<div class="gallery-item"><p class="placeholder-text">Erreur lors du chargement des projets</p></div>';
        }
    }
}

// Fonction pour charger les détails d'une création
async function loadCreationDetail() {
    const detailContent = document.getElementById('creation-detail-content');
    const backLink = document.querySelector('.back-link');
    
    // Vérifier si on est sur la page de détail
    if (!detailContent || !window.location.pathname.includes('creation-detail.html')) {
        return;
    }
    
    try {
        // Récupérer l'ID et le type depuis l'URL
        const urlParams = new URLSearchParams(window.location.search);
        const creationId = parseInt(urlParams.get('id'));
        const type = urlParams.get('type');
        
        if (!creationId) {
            detailContent.innerHTML = '<div class="creation-detail-error"><p>ID de création manquant</p></div>';
            return;
        }
        
        let creation = null;
        
        // Charger depuis le bon fichier selon le type
        if (type === 'photo' || type === 'graphisme') {
            const response = await fetch('projets.json');
            if (!response.ok) {
                throw new Error('Erreur lors du chargement des projets');
            }
            const data = await response.json();
            creation = data.projets.find(p => p.id === creationId);
            
            // Mettre à jour le lien de retour
            if (backLink) {
                if (type === 'photo') {
                    backLink.href = 'photographie.html';
                    backLink.textContent = '← Retour à la photographie';
                } else if (type === 'graphisme') {
                    backLink.href = 'graphisme.html';
                    backLink.textContent = '← Retour au graphisme';
                }
            }
        } else {
            // Type vidéo ou non spécifié, charger depuis creations.json
            const response = await fetch('creations.json');
            if (!response.ok) {
                throw new Error('Erreur lors du chargement des créations');
            }
            const data = await response.json();
            creation = data.creations.find(c => c.id === creationId);
            
            // Mettre à jour le lien de retour
            if (backLink) {
                backLink.href = 'video.html';
                backLink.textContent = '← Retour aux vidéos';
            }
        }
        
        if (!creation) {
            detailContent.innerHTML = '<div class="creation-detail-error"><p>Création introuvable</p></div>';
            return;
        }
        
        // Construire le HTML de la page de détail
        let html = '<div class="creation-detail">';
        
        // Contenu selon le type
        if (type === 'photo' || type === 'graphisme') {
            // Image pour photo et graphisme
            html += `
                <div class="creation-image">
                    <img src="${creation.image}" alt="${creation.title}" style="width: 100%; height: auto; display: block;">
                </div>
            `;
        } else {
            // Vidéo YouTube pour les vidéos
            const videoId = extractYouTubeId(creation.url);
            if (videoId) {
                html += `
                    <div class="creation-video">
                        <div class="video-wrapper">
                            <iframe 
                                src="https://www.youtube.com/embed/${videoId}" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen>
                            </iframe>
                        </div>
                    </div>
                `;
            }
        }
        
        // Informations de la création
        html += `
            <div class="creation-info">
                <h1 class="creation-title">${creation.title}</h1>
                <div class="creation-meta">
                    <span class="creation-date">${creation.date || 'Date non spécifiée'}</span>
                </div>
                <div class="creation-description">
                    <p>${creation.description || 'Aucune description disponible.'}</p>
                </div>
            </div>
        `;
        
        html += '</div>';
        
        detailContent.innerHTML = html;
        
    } catch (error) {
        console.error('Erreur lors du chargement des détails:', error);
        detailContent.innerHTML = '<div class="creation-detail-error"><p>Erreur lors du chargement des détails de la création</p></div>';
    }
}

// Gallery module

// Photography data (sample content)
const photographyItems = [
  {
    id: 1,
    title: 'Mariage',
    category: 'Mariage',
    image: 'photo mariage/P1014866sans poubelle.png',
    thumbnails: [
      'photo mariage/P1014776.jpg',
      'photo mariage/P1014866sans poubelle.png',
      'photo mariage/vert.png',
      'photo mariage/bleu.png',
    ],
    description: 'Mon tout premier mariage, et beaucoup de fierté, un résultat qui me ressemble. ',
    date: 'Mai 2025',
    client: 'Youssef Kouiri',
    services: 'Photographie'
  },
  {
    id: 2,
    title: 'Moine',
    category: 'Portrait',
    image: 'photoparis/image3.png',
    thumbnails: [
      'photoparis/moine2.png',
      'photoparis/image3.png',
      'photoparis/moine1.png',
    ],
    description: 'Un moine en robe safran marche sereinement devant le Louvre, contrastant avec l’effervescence du lieu et apportant une touche de spiritualité inattendue au cœur de Paris.',
    date: 'Mai 2025',
    client: 'Moine',
    services: 'Portrait Photographie'
  },
  {
    id: 3,
    title: 'Paris',
    category: 'Photo de rue',
    image: 'photoparis/image2.png',
    thumbnails: [
      'photoparis/image2.png',
      'photoparis/image1.png',
      'photoparis/image9.png',
    ],
    description: 'Moments volés au cœur de la ville : regards furtifs, silhouettes en mouvement. L’âme de Paris en quelques clichés.',
    date: 'Mai 2025',
    client: 'moi même',
    services: ' '
  },
  // {
  //   id: 4,
  //   title: 'Mountain Serenity',
  //   category: 'landscape',
  //   image: 'https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //   thumbnails: [
  //     'https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //     'https://images.pexels.com/photos/1562/italian-landscape-mountains-nature.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //     'https://images.pexels.com/photos/1903702/pexels-photo-1903702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  //   ],
  //   description: 'A majestic landscape series showcasing the grandeur and tranquility of mountain environments. Through careful attention to lighting and composition, these images capture the dramatic beauty of natural landscapes and evoke a sense of peace and wonder in the viewer.',
  //   date: 'June 2024',
  //   client: 'Nature Magazine',
  //   services: 'Landscape Photography, Post-Processing'
  // },
  // {
  //   id: 5,
  //   title: 'Fashion Editorial',
  //   category: 'portrait',
  //   image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //   thumbnails: [
  //     'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //     'https://images.pexels.com/photos/967329/pexels-photo-967329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //     'https://images.pexels.com/photos/975250/pexels-photo-975250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  //   ],
  //   description: 'A high-fashion editorial series with a focus on elegant composition and expressive poses. This collection blends artistic vision with commercial appeal, creating striking images that showcase both the garments and the emotional qualities they evoke through carefully crafted visual storytelling.',
  //   date: 'May 2024',
  //   client: 'Vogue Magazine',
  //   services: 'Fashion Photography, Direction'
  // },
  // {
  //   id: 6,
  //   title: 'Corporate Event',
  //   category: 'event',
  //   image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //   thumbnails: [
  //     'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //     'https://images.pexels.com/photos/2566581/pexels-photo-2566581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //     'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  //   ],
  //   description: 'Documentation of professional corporate events with a focus on capturing key moments and interactions. This series balances professionalism with authenticity, creating a comprehensive visual record that highlights the atmosphere and achievements of business gatherings.',
  //   date: 'April 2024',
  //   client: 'Tech Innovations Inc.',
  //   services: 'Event Photography, Corporate'
  // }
];

// Videography data with actual video links
const videographyItems = [
  {
    id: 1,
    title: 'Graphiste : Un métier de passion et de créativité – Interview avec Louanne Atienza',
    category: 'Interview',
    thumbnail: 'https://img.youtube.com/vi/qi8RQ_vqVv4/maxresdefault.jpg',  // Miniature HD
    videoUrl: 'https://www.youtube.com/embed/qi8RQ_vqVv4?controls=0&disablekb=1&modestbranding=1&rel=0', // Lecture intégrée avec options
    description: 'Cette vidéo plonge dans le métier de graphiste à travers une interview de Louanne Atienza.',
    date: '14 Mars 2025',
    client: '©Parcoursmetiers - IUT de Mulhouse 2025',
    services: 'Interview de Louanne Atienza'
  },
  // {
  //   id: 2,
  //   title: "Elle raconte l'enfer d'Auschwitz : une mémoire pour ne pas oublier",
  //   category: 'Documentaire',
  //   thumbnail: 'https://img.youtube.com/vi/K3Yx8Vq4TkA/maxresdefault.jpg',
  //   videoUrl: 'https://www.youtube.com/embed/K3Yx8Vq4TkA?controls=0&disablekb=1&modestbranding=1&rel=0',
  //   description: ' ',
  //   date: 'Mai 2025',
  //   client: ' ',
  //   services: ' '
  // },

  // {
  //   id: 3,
  //   title: 'Wedding Film',
  //   category: 'wedding',
  //   thumbnail: 'https://images.pexels.com/photos/1488312/pexels-photo-1488312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //   videoUrl: 'https://player.vimeo.com/video/824804225',
  //   description: 'A cinematic wedding film that captures the emotions and atmosphere of a couple\'s special day.',
  //   date: 'July 2024',
  //   client: 'Sarah & Michael',
  //   services: 'Wedding Videography, Editing'
  // },
  // {
  //   id: 4,
  //   title: 'Product Launch',
  //   category: 'commercial',
  //   thumbnail: 'https://images.pexels.com/photos/2148844/pexels-photo-2148844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //   videoUrl: 'https://player.vimeo.com/video/824804225',
  //   description: 'A dynamic commercial showcasing a new product through creative visual storytelling and technical excellence.',
  //   date: 'June 2024',
  //   client: 'Tech Company',
  //   services: 'Commercial Production, Post-Production'
  // }
];

// Initialize gallery
export function initGallery() {
  // Populate photography gallery
  populatePhotoGallery();

  // Populate video gallery
  populateVideoGallery();

  // Setup filter functionality
  setupFilters();
}

// Populate photography gallery with items
function populatePhotoGallery() {
  const galleryContainer = document.getElementById('photography-gallery');

  if (!galleryContainer) return;

  let galleryHTML = '';

  photographyItems.forEach(item => {
    galleryHTML += `
      <div class="gallery-item fade-in" data-category="${item.category}" data-id="${item.id}">
        <img src="${item.image}" alt="${item.title}">
        <div class="item-overlay">
          <h3 class="item-title">${item.title}</h3>
          <p class="item-category">${item.category.charAt(0).toUpperCase() + item.category.slice(1)}</p>
        </div>
      </div>
    `;
  });

  galleryContainer.innerHTML = galleryHTML;

  const galleryItems = document.querySelectorAll('#photography-gallery .gallery-item');

  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const itemId = parseInt(item.dataset.id);
      const projectData = photographyItems.find(photo => photo.id === itemId);

      if (projectData && window.openProjectModal) {
        const mainImage = projectData.image;
        window.openProjectModal({
          ...projectData,
          mainImage
        });
      }
    });
  });
}

// Populate video gallery with items
function populateVideoGallery() {
  const videoContainer = document.getElementById('video-gallery');

  if (!videoContainer) return;

  let videoHTML = '';

  videographyItems.forEach(item => {
    videoHTML += `
      <div class="video-item fade-in" data-category="${item.category}" data-id="${item.id}">
        <img src="${item.thumbnail}" alt="${item.title}" class="video-thumbnail">
        <div class="play-button"></div>
        <div class="video-info">
          <h3 class="video-title">${item.title}</h3>
          <p class="video-category">${item.category.charAt(0).toUpperCase() + item.category.slice(1)}</p>
        </div>
      </div>
    `;
  });

  videoContainer.innerHTML = videoHTML;

  const videoItems = document.querySelectorAll('#video-gallery .video-item');

  videoItems.forEach(item => {
    item.addEventListener('click', () => {
      const itemId = parseInt(item.dataset.id);
      const projectData = videographyItems.find(video => video.id === itemId);

      if (projectData) {
        openVideoModal(projectData);
      }
    });
  });
}

// Open video modal
function openVideoModal(videoData) {
  const modal = document.createElement('div');
  modal.className = 'video-modal';

  modal.innerHTML = `
    <div class="video-modal-content">
      <div class="modal-close">&times;</div>
      <div class="video-container">
        <iframe src="${videoData.videoUrl}?autoplay=1" 
                frameborder="0" 
                allow="autoplay; fullscreen; picture-in-picture" 
                allowfullscreen>
        </iframe>
      </div>
      <div class="video-info">
        <h2>${videoData.title}</h2>
        <p>${videoData.description}</p>
        <div class="video-meta">
          <span>Client: ${videoData.client}</span>
          <span>Services: ${videoData.services}</span>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(modal);
  document.body.style.overflow = 'hidden';

  // Close modal functionality
  const closeBtn = modal.querySelector('.modal-close');
  closeBtn.addEventListener('click', () => {
    document.body.removeChild(modal);
    document.body.style.overflow = 'auto';
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      document.body.removeChild(modal);
      document.body.style.overflow = 'auto';
    }
  });
}

// Setup filter functionality
function setupFilters() {
  const photoFilters = document.querySelectorAll('#photography .filter-btn');
  const videoFilters = document.querySelectorAll('#videography .filter-btn');
  const photoItems = document.querySelectorAll('#photography-gallery .gallery-item');
  const videoItems = document.querySelectorAll('#video-gallery .video-item');

  // Setup photography filters
  photoFilters.forEach(filter => {
    filter.addEventListener('click', () => {
      photoFilters.forEach(btn => btn.classList.remove('active'));
      filter.classList.add('active');
      const category = filter.dataset.filter;
      filterItems(photoItems, category);
    });
  });

  // Setup videography filters
  videoFilters.forEach(filter => {
    filter.addEventListener('click', () => {
      videoFilters.forEach(btn => btn.classList.remove('active'));
      filter.classList.add('active');
      const category = filter.dataset.filter;
      filterItems(videoItems, category);
    });
  });
}

// Filter items based on category
function filterItems(items, category) {
  items.forEach(item => {
    if (category === 'all' || item.dataset.category === category) {
      item.style.display = 'block';
      setTimeout(() => {
        item.style.opacity = '1';
        item.style.transform = 'scale(1)';
      }, 50);
    } else {
      item.style.opacity = '0';
      item.style.transform = 'scale(0.8)';
      setTimeout(() => {
        item.style.display = 'none';
      }, 300);
    }
  });
}








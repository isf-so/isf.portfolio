// Import modules
import { initAnimations } from './animations.js';
import { initGallery } from './gallery.js';
import { initNavigation } from './navigation.js';

// Document ready function
document.addEventListener('DOMContentLoaded', () => {
  // Initialize loader
  initLoader();
  
  // Initialize modules
  initCursor();
  initHeroSlider();
  initNavigation();
  initGallery();
  initAnimations();
  initContactForm();
  initProjectModal();
});

// Loader function
function initLoader() {
  const loader = document.querySelector('.loader');
  
  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.classList.add('loaded');
    }, 2500);
  });
}

// Custom cursor
function initCursor() {
  const cursor = document.querySelector('.cursor');
  const cursorFollower = document.querySelector('.cursor-follower');
  
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
    
    setTimeout(() => {
      cursorFollower.style.left = `${e.clientX}px`;
      cursorFollower.style.top = `${e.clientY}px`;
    }, 100);
  });
  
  // Add cursor effects on interactive elements
  const links = document.querySelectorAll('a, button, .gallery-item, .video-item');
  
  links.forEach(link => {
    link.addEventListener('mouseenter', () => {
      cursor.style.width = '30px';
      cursor.style.height = '30px';
      cursorFollower.style.width = '0px';
      cursorFollower.style.height = '0px';
    });
    
    link.addEventListener('mouseleave', () => {
      cursor.style.width = '10px';
      cursor.style.height = '10px';
      cursorFollower.style.width = '40px';
      cursorFollower.style.height = '40px';
    });
  });
}

// Hero slider
function initHeroSlider() {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  const prevArrow = document.querySelector('.slider-arrow.prev');
  const nextArrow = document.querySelector('.slider-arrow.next');
  let currentSlide = 0;
  let slideInterval;
  
  // Function to change slide
  const changeSlide = (index) => {
    // Remove active class from all slides
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Add active class to current slide
    slides[index].classList.add('active');
    dots[index].classList.add('active');
    
    // Update current slide index
    currentSlide = index;
  };
  
  // Auto slide function
  const autoSlide = () => {
    const newIndex = (currentSlide + 1) % slides.length;
    changeSlide(newIndex);
  };
  
  // Start auto slide
  const startSlideInterval = () => {
    slideInterval = setInterval(autoSlide, 5000);
  };
  
  // Reset interval on manual change
  const resetInterval = () => {
    clearInterval(slideInterval);
    startSlideInterval();
  };
  
  // Event listeners for controls
  prevArrow.addEventListener('click', () => {
    const newIndex = (currentSlide - 1 + slides.length) % slides.length;
    changeSlide(newIndex);
    resetInterval();
  });
  
  nextArrow.addEventListener('click', () => {
    const newIndex = (currentSlide + 1) % slides.length;
    changeSlide(newIndex);
    resetInterval();
  });
  
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      changeSlide(index);
      resetInterval();
    });
  });
  
  // Initialize first slide and start interval
  changeSlide(0);
  startSlideInterval();
}

// Contact form
function initContactForm() {
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Simulate form submission
      const submitBtn = contactForm.querySelector('.submit-btn');
      const originalText = submitBtn.textContent;
      
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;
      
      setTimeout(() => {
        // Show success message
        contactForm.innerHTML = `
          <div class="success-message">
            <h3>Message Sent Successfully!</h3>
            <p>Thank you for contacting me. I'll get back to you soon.</p>
          </div>
        `;
      }, 1500);
    });
  }
}

// Project modal
function initProjectModal() {
  const modal = document.querySelector('.project-modal');
  const modalClose = document.querySelector('.modal-close');
  const modalContent = document.querySelector('.modal-content');
  
  // Close modal function
  const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  };
  
  // Close on click outside
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
  
  // Close on button click
  modalClose.addEventListener('click', closeModal);
  
  // Close on ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
  
  // Open modal function (will be called from gallery.js)
  window.openProjectModal = (projectData) => {
    // Populate modal with project data
    modalContent.innerHTML = `
      <div class="project-images">
        <img src="${projectData.mainImage}" alt="${projectData.title}" class="project-main-image">
        <div class="project-thumbnails">
          ${projectData.thumbnails.map(thumb => `
            <img src="${thumb}" alt="Thumbnail" class="project-thumbnail">
          `).join('')}
        </div>
      </div>
      <div class="project-info">
        <h2>${projectData.title}</h2>
        <div class="project-category">${projectData.category}</div>
        <div class="project-description">
          ${projectData.description}
        </div>
        <div class="project-meta">
          <div class="meta-item">
            <h4>Date</h4>
            <p>${projectData.date}</p>
          </div>
          <div class="meta-item">
            <h4>Client</h4>
            <p>${projectData.client}</p>
          </div>
          <div class="meta-item">
            <h4>Services</h4>
            <p>${projectData.services}</p>
          </div>
        </div>
      </div>
    `;
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Handle thumbnail clicks
    const thumbnails = document.querySelectorAll('.project-thumbnail');
    const mainImage = document.querySelector('.project-main-image');
    
    thumbnails.forEach(thumb => {
      thumb.addEventListener('click', () => {
        mainImage.src = thumb.src;
        mainImage.classList.add('fade-animation');
        setTimeout(() => {
          mainImage.classList.remove('fade-animation');
        }, 300);
      });
    });
  };
}

// Export functions that might be needed by other modules
export { initCursor };
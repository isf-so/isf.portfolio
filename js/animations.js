// Animations module

// Initialize animations
export function initAnimations() {
  // Setup scroll animations with Intersection Observer
  setupScrollAnimations();
  
  // Setup parallax effect
  setupParallax();
  
  // Animate skill bars when visible
  animateSkillBars();
  
  // Setup scroll indicator
  setupScrollIndicator();
}

// Set up scroll animations using Intersection Observer
function setupScrollAnimations() {
  // Get all elements that need animation
  const animatedElements = document.querySelectorAll(
    '.fade-in, .fade-in-left, .fade-in-right, .scale-in, .text-reveal'
  );
  
  // Create options for Intersection Observer
  const observerOptions = {
    root: null, // viewport
    threshold: 0.15, // trigger when 15% is visible
    rootMargin: '0px 0px -50px 0px' // slight offset
  };
  
  // Create observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add appear class when element is visible
        entry.target.classList.add('appear');
        
        // Stop observing after animation is triggered
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Start observing each element
  animatedElements.forEach(element => {
    observer.observe(element);
  });
}

// Set up parallax effect on scroll
function setupParallax() {
  // Get elements that should have parallax effect
  const parallaxElements = document.querySelectorAll('.parallax');
  
  // Set up scroll event listener
  window.addEventListener('scroll', () => {
    // Calculate parallax effect for each element
    parallaxElements.forEach(element => {
      const speed = element.dataset.speed || 0.15;
      const yPos = window.scrollY * speed;
      element.style.transform = `translateY(${yPos}px)`;
    });
  });
}

// Animate skill bars when they come into view
function animateSkillBars() {
  // Get all skill progress bars
  const skillBars = document.querySelectorAll('.skill-progress');
  
  // Create observer for skill bars
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Get target width from inline style
        const targetWidth = entry.target.style.width;
        
        // Reset width to 0 before animation
        entry.target.style.width = '0%';
        
        // Animate to target width
        setTimeout(() => {
          entry.target.style.width = targetWidth;
        }, 100);
        
        // Stop observing after animation
        skillObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  
  // Start observing each skill bar
  skillBars.forEach(bar => {
    skillObserver.observe(bar);
  });
}

// Setup scrolling header style changes
function setupScrollIndicator() {
  const nav = document.querySelector('.main-nav');
  const scrollIndicator = document.querySelector('.scroll-indicator');
  
  // Change header style on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      nav.classList.add('scrolled');
      if (scrollIndicator) {
        scrollIndicator.style.opacity = '0';
      }
    } else {
      nav.classList.remove('scrolled');
      if (scrollIndicator) {
        scrollIndicator.style.opacity = '1';
      }
    }
  });
}

// Additional animation helper functions
export function addEntranceAnimation(element, delay = 0) {
  element.style.opacity = '0';
  element.style.transform = 'translateY(20px)';
  
  setTimeout(() => {
    element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    element.style.opacity = '1';
    element.style.transform = 'translateY(0)';
  }, delay);
}

export function addExitAnimation(element, callback) {
  element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  element.style.opacity = '0';
  element.style.transform = 'translateY(20px)';
  
  setTimeout(callback, 500);
}
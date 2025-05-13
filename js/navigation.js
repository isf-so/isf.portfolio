// Navigation module

// Initialize navigation
export function initNavigation() {
  // Setup smooth scrolling
  setupSmoothScrolling();
  
  // Setup mobile navigation
  setupMobileNav();
  
  // Setup active nav highlighting
  setupNavHighlighting();
}

// Set up smooth scrolling for navigation links
function setupSmoothScrolling() {
  // Get all navigation links
  const navLinks = document.querySelectorAll('.nav-item, .footer-links a');
  
  // Add click event to each link
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      
      // Get target section id
      const targetId = link.getAttribute('href');
      
      // Skip if not an anchor link
      if (!targetId || !targetId.startsWith('#')) return;
      
      // Get target element
      const targetElement = document.querySelector(targetId);
      
      // Scroll to target if exists
      if (targetElement) {
        // Close mobile menu if open
        const navLinks = document.querySelector('.nav-links');
        const navToggle = document.querySelector('.nav-toggle');
        if (navLinks.classList.contains('active')) {
          navLinks.classList.remove('active');
          navToggle.classList.remove('active');
          document.body.classList.remove('menu-open');
        }
        
        // Get header height for offset
        const headerHeight = document.querySelector('.main-nav').offsetHeight;
        
        // Calculate scroll position
        const offsetTop = targetElement.offsetTop - headerHeight;
        
        // Scroll smoothly
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Set up mobile navigation
function setupMobileNav() {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  // Toggle mobile menu on button click
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
    document.body.classList.toggle('menu-open');
  });
  
  // Close menu on window resize if desktop size
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && navLinks.classList.contains('active')) {
      navToggle.classList.remove('active');
      navLinks.classList.remove('active');
      document.body.classList.remove('menu-open');
    }
  });
}

// Set up active nav highlighting based on scroll position
function setupNavHighlighting() {
  // Get all sections
  const sections = document.querySelectorAll('section, header');
  const navItems = document.querySelectorAll('.nav-item');
  
  // Update active nav on scroll
  window.addEventListener('scroll', () => {
    // Get current scroll position
    const scrollPosition = window.scrollY + 200; // Offset for better UX
    
    // Find current section
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        // Remove active class from all nav items
        navItems.forEach(item => {
          item.classList.remove('active');
        });
        
        // Add active class to corresponding nav item
        const correspondingNavItem = document.querySelector(`.nav-item[href="#${sectionId}"]`);
        if (correspondingNavItem) {
          correspondingNavItem.classList.add('active');
        }
      }
    });
  });
}

// Function to navigate to a specific section
export function navigateToSection(sectionId) {
  const section = document.getElementById(sectionId);
  
  if (section) {
    // Get header height for offset
    const headerHeight = document.querySelector('.main-nav').offsetHeight;
    
    // Calculate scroll position
    const offsetTop = section.offsetTop - headerHeight;
    
    // Scroll smoothly
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  }
}
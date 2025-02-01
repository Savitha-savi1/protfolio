// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent default anchor behavior
      const targetId = this.getAttribute('href'); // Get the target section ID
      const targetSection = document.querySelector(targetId); // Find the target section
      targetSection.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the section
    });
  });
  
  // Scroll Animations (Fade In Effect)
  const sections = document.querySelectorAll('section'); // Get all sections
  
  const fadeInOnScroll = () => {
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top; // Get the top position of the section
      const windowHeight = window.innerHeight; // Get the height of the viewport
  
      // If the section is in the viewport, add the 'visible' class
      if (sectionTop < windowHeight * 0.8) {
        section.classList.add('visible');
      }
    });
  };
  
  // Trigger the fade-in effect on page load and scroll
  window.addEventListener('load', fadeInOnScroll);
  window.addEventListener('scroll', fadeInOnScroll);
  
  // Form Validation for Contact Form
  const contactForm = document.querySelector('#contact form'); // Get the contact form
  
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission
  
    // Get form inputs
    const name = contactForm.querySelector('input[name="name"]').value.trim();
    const email = contactForm.querySelector('input[name="email"]').value.trim();
    const message = contactForm.querySelector('textarea[name="message"]').value.trim();
  
    // Validate inputs
    if (name === '' || email === '' || message === '') {
      alert('Please fill out all fields.'); // Show error message
      return;
    }
  
    if (!validateEmail(email)) {
      alert('Please enter a valid email address.'); // Show error message
      return;
    }
  
    // If all inputs are valid, show a success message
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset(); // Reset the form
  });
  
  // Helper function to validate email
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email regex
    return emailRegex.test(email);
  };
document.addEventListener('DOMContentLoaded', function() {
    // FAQ Accordion Functionality
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const isExpanded = question.getAttribute('aria-expanded') === 'true';
            question.setAttribute('aria-expanded', !isExpanded);
            
            const answer = document.getElementById(question.getAttribute('aria-controls'));
            answer.setAttribute('aria-hidden', isExpanded);
        });
    });
    
    // Form Validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple validation
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const subject = document.getElementById('subject');
            const message = document.getElementById('message');
            let isValid = true;
            
            // Reset error states
            document.querySelectorAll('.error').forEach(el => el.remove());
            
            // Validate name
            if (!name.value.trim()) {
                showError(name, 'Please enter your name');
                isValid = false;
            }
            
            // Validate email
            if (!email.value.trim()) {
                showError(email, 'Please enter your email');
                isValid = false;
            } else if (!isValidEmail(email.value)) {
                showError(email, 'Please enter a valid email');
                isValid = false;
            }
            
            // Validate subject
            if (!subject.value) {
                showError(subject, 'Please select a subject');
                isValid = false;
            }
            
            // Validate message
            if (!message.value.trim()) {
                showError(message, 'Please enter your message');
                isValid = false;
            }
            
            if (isValid) {
                // Form is valid - submit via AJAX or other method
                alert('Thank you for your message! We will contact you soon.');
                contactForm.reset();
            }
        });
    }
    
    function showError(input, message) {
        const errorElement = document.createElement('div');
        errorElement.className = 'error';
        errorElement.style.color = '#ff5a5f';
        errorElement.style.fontSize = '14px';
        errorElement.style.marginTop = '5px';
        errorElement.textContent = message;
        
        input.parentNode.appendChild(errorElement);
        input.focus();
    }
    
    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
    
    // Initialize phone input formatting
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            const x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
            e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
        });
    }
});
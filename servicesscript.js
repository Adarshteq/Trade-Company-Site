// Tab functionality
document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Show corresponding content
            const tabId = button.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Testimonial slider navigation
    const slider = document.querySelector('.testimonials-slider');
    const prevBtn = document.createElement('button');
    const nextBtn = document.createElement('button');
    
    prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
    nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
    
    prevBtn.className = 'slider-nav prev';
    nextBtn.className = 'slider-nav next';
    
    const navContainer = document.createElement('div');
    navContainer.className = 'slider-nav-container';
    navContainer.appendChild(prevBtn);
    navContainer.appendChild(nextBtn);
    
    document.querySelector('.testimonials-section').appendChild(navContainer);
    
    prevBtn.addEventListener('click', () => {
        slider.scrollBy({ left: -350, behavior: 'smooth' });
    });
    
    nextBtn.addEventListener('click', () => {
        slider.scrollBy({ left: 350, behavior: 'smooth' });
    });
});
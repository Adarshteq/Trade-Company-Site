// Animate statistics counting
document.addEventListener('DOMContentLoaded', function() {
    // Statistics counter animation
    const statNumbers = document.querySelectorAll('.stat-number');
    if (statNumbers.length > 0) {
        const animateCounters = () => {
            statNumbers.forEach(stat => {
                const target = parseInt(stat.getAttribute('data-count'));
                const duration = 2000; // Animation duration in ms
                const step = target / (duration / 16); // 60fps
                let current = 0;
                
                const updateCounter = () => {
                    current += step;
                    if (current < target) {
                        stat.textContent = Math.floor(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        stat.textContent = target;
                    }
                };
                
                // Only animate when element is in viewport
                const observer = new IntersectionObserver((entries) => {
                    if (entries[0].isIntersecting) {
                        updateCounter();
                        observer.unobserve(stat);
                    }
                });
                
                observer.observe(stat);
            });
        };
        
        animateCounters();
    }
    
    // Smooth scrolling for timeline navigation
    const timelineItems = document.querySelectorAll('.timeline-item');
    if (timelineItems.length > 0) {
        timelineItems.forEach(item => {
            item.addEventListener('click', () => {
                item.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
            });
        });
    }
    
    // Team card hover effects for touch devices
    const teamCards = document.querySelectorAll('.team-card');
    if (teamCards.length > 0) {
        teamCards.forEach(card => {
            card.addEventListener('touchstart', () => {
                card.classList.add('hover-effect');
            });
            
            card.addEventListener('touchend', () => {
                setTimeout(() => {
                    card.classList.remove('hover-effect');
                }, 1000);
            });
        });
    }
});
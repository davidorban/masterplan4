// Main JavaScript for Master Plan 4 website

document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Simple analytics (if enabled)
    if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
        // Replace with your analytics code if needed
        console.log('Analytics would be loaded here in production');
    }
});

   // Simple JavaScript for interactive elements
        document.addEventListener('DOMContentLoaded', function() {
            // Add animation to cards on scroll
            const cards = document.querySelectorAll('.card');
            const leaderCards = document.querySelectorAll('.leader-card');
            const miniSiteCards = document.querySelectorAll('.mini-site-card');
            
            function checkScroll() {
                cards.forEach(card => {
                    const cardPosition = card.getBoundingClientRect().top;
                    const screenPosition = window.innerHeight / 1.3;
                    
                    if (cardPosition < screenPosition) {
                        card.style.opacity = 1;
                        card.style.transform = 'translateY(0)';
                    }
                });
                
                leaderCards.forEach(card => {
                    const cardPosition = card.getBoundingClientRect().top;
                    const screenPosition = window.innerHeight / 1.3;
                    
                    if (cardPosition < screenPosition) {
                        card.style.opacity = 1;
                        card.style.transform = 'translateY(0)';
                    }
                });
                
                miniSiteCards.forEach(card => {
                    const cardPosition = card.getBoundingClientRect().top;
                    const screenPosition = window.innerHeight / 1.3;
                    
                    if (cardPosition < screenPosition) {
                        card.style.opacity = 1;
                        card.style.transform = 'translateY(0)';
                    }
                });
            }
            
            // Initialize card styles
            cards.forEach(card => {
                card.style.opacity = 0;
                card.style.transform = 'translateY(20px)';
                card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            });
            
            leaderCards.forEach(card => {
                card.style.opacity = 0;
                card.style.transform = 'translateY(20px)';
                card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            });
            
            miniSiteCards.forEach(card => {
                card.style.opacity = 0;
                card.style.transform = 'translateY(20px)';
                card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            });
            
            // Check scroll position on load and scroll
            checkScroll();
            window.addEventListener('scroll', checkScroll);
            
            // Mobile menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
            
            // Admin login simulation
            const adminBtn = document.querySelector('.header-buttons .btn');
            if (adminBtn) {
                adminBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    const password = prompt('Please enter admin password:');
                    if (password === 'password123') { // Example password
                        alert('Login successful! Admin dashboard would open here.');
                    } else {
                        alert('Incorrect password. Please try again.');
                    }
                });
            }
        });
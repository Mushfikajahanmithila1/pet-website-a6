// Form submission handler for contact page
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // Validate form
            if (!name || !email || !message) {
                showMessage('Please fill in all fields.', 'error');
                return;
            }
            
            // Validate email format
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showMessage('Please enter a valid email address.', 'error');
                return;
            }
            
            // Show success message
            showMessage('Thank you! Your message has been sent successfully.', 'success');
            
            // Reset form
            contactForm.reset();
            
            // Here you could send the data to a server
            console.log('Form data:', { name, email, message });
        });
    }
});

// Function to display form messages
function showMessage(text, type) {
    const messageDiv = document.getElementById('formMessage');
    if (messageDiv) {
        messageDiv.textContent = text;
        messageDiv.className = type;
        
        // Auto-hide success message after 5 seconds
        if (type === 'success') {
            setTimeout(function() {
                messageDiv.style.display = 'none';
            }, 5000);
        }
    }
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Shop Now button functionality
document.addEventListener('click', function(e) {
    if (e.target.textContent === 'Shop Now') {
        // Scroll to featured section
        const featuredSection = document.querySelector('.featured');
        if (featuredSection) {
            featuredSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});

// View Details button functionality
document.querySelectorAll('.product-card .btn-secondary').forEach(button => {
    button.addEventListener('click', function() {
        const productName = this.parentElement.querySelector('h3').textContent;
        alert(`You clicked on ${productName}! Check back soon for more details.`);
    });
});

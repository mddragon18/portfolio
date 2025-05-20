
        document.getElementById('contactForm').addEventListener('submit', function(event) {
            event.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            const statusElement = document.getElementById('formStatus');
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                statusElement.textContent = 'Please enter a valid email address.';
                statusElement.style.color = 'red';
                return;
            }
            
            // Construct mailto URL with form data
            const mailtoUrl = `mailto:your.email@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
                `Name: ${name}\nEmail: ${email}\n\n${message}`
            )}`;
            
            // Open email client
            window.location.href = mailtoUrl;
            
            // Show success message
            statusElement.textContent = 'Opening your email client...';
            statusElement.style.color = 'green';
            
            // Clear form
            this.reset();
            
            // Alternative message if email client doesn't open automatically
            setTimeout(() => {
                statusElement.innerHTML = 'If your email client didn\'t open, please send an email directly';
            }, 3000);
        });
    

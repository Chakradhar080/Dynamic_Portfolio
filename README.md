# Dynamic Portfolio

This is a modern, responsive portfolio website for Chakradhar Maduri.

## Features

- Responsive design that works on all devices
- Smooth scrolling navigation
- Animated hero section with particle background
- Typing text effect in the hero section
- Interactive certificate viewer
- Contact form
- Smooth animations and transitions

## Setup Instructions

1. Clone or download this repository
2. Open `index.html` in your browser to view the portfolio

## Contact Form Setup

The contact form currently shows an alert when submitted. To make it actually send emails, you can use one of these services:

### Option 1: Formspree (Easiest)
1. Go to [Formspree](https://formspree.io/)
2. Sign up for a free account
3. Create a new form and get your form endpoint
4. Replace the `<form>` tag in `index.html` with:
   ```html
   <form id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
5. Replace `YOUR_FORM_ID` with your actual Formspree form ID

### Option 2: EmailJS
1. Go to [EmailJS](https://www.emailjs.com/)
2. Sign up for a free account
3. Create an email service and template
4. Get your User ID, Service ID, and Template ID
5. In `index.html`, add this to the `<head>` section:
   ```html
   <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
   <script type="text/javascript">
       (function() {
           emailjs.init("YOUR_USER_ID");
       })();
   </script>
   ```
6. In `script.js`, replace the contact form handling code with:
   ```javascript
   const contactForm = document.getElementById('contactForm');
   if (contactForm) {
       contactForm.addEventListener('submit', function(e) {
           e.preventDefault();
           
           const name = document.getElementById('name').value;
           const email = document.getElementById('email').value;
           const message = document.getElementById('message').value;
           
           if (name && email && message) {
               const templateParams = {
                   from_name: name,
                   from_email: email,
                   message: message,
                   to_name: "Chakradhar Maduri"
               };
               
               emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
                   .then(function(response) {
                       console.log('SUCCESS!', response.status, response.text);
                       alert('Thank you for your message! I will get back to you soon.');
                       contactForm.reset();
                   }, function(error) {
                       console.log('FAILED...', error);
                       alert('Oops! Something went wrong. Please try again later.');
                   });
           } else {
               alert('Please fill in all fields.');
           }
       });
   }
   ```

## Customization

You can easily customize this portfolio by modifying:
- `index.html` - Content and structure
- `styles.css` - Styling and layout
- `script.js` - Interactive functionality
- Images in the root folder - Personal photos and certificates

## Technologies Used

- HTML5
- CSS3
- JavaScript
- particles.js for the animated background
- Font Awesome for icons
- Google Fonts

## Support

If you have any issues or questions, please open an issue on this repository.
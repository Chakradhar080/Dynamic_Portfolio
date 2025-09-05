// Modern Portfolio JavaScript - Enhanced with Professional Animations

document.addEventListener('DOMContentLoaded', function() {
    // Show loading screen
    const loadingScreen = document.createElement('div');
    loadingScreen.className = 'loading-screen';
    loadingScreen.innerHTML = '<div class="spinner"></div>';
    document.body.appendChild(loadingScreen);
    
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        document.getElementById('themeToggle').innerHTML = '<i class="fas fa-sun"></i>';
    }
    
    // Hide loading screen when page is fully loaded
    window.addEventListener('load', function() {
        setTimeout(function() {
            loadingScreen.classList.add('hidden');
            setTimeout(function() {
                document.body.removeChild(loadingScreen);
            }, 500);
        }, 1000);
    });
    
    // Theme Toggle
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            
            // Save preference to localStorage
            if (document.body.classList.contains('dark-mode')) {
                localStorage.setItem('theme', 'dark');
                this.innerHTML = '<i class="fas fa-sun"></i>';
            } else {
                localStorage.setItem('theme', 'light');
                this.innerHTML = '<i class="fas fa-moon"></i>';
            }
            
            // Update particles.js colors
            if (typeof particlesJS !== 'undefined' && document.getElementById("particles-js")) {
                // Reinitialize particles with new colors
                particlesJS("particles-js", {
                    "particles": {
                        "number": {
                            "value": 80,
                            "density": {
                                "enable": true,
                                "value_area": 800
                            }
                        },
                        "color": {
                            "value": document.body.classList.contains('dark-mode') ? "#00c6ff" : "#ffffff"
                        },
                        "shape": {
                            "type": "circle",
                            "stroke": {
                                "width": 0,
                                "color": "#000000"
                            }
                        },
                        "opacity": {
                            "value": 0.5,
                            "random": true,
                            "anim": {
                                "enable": true,
                                "speed": 1,
                                "opacity_min": 0.1,
                                "sync": false
                            }
                        },
                        "size": {
                            "value": 3,
                            "random": true,
                            "anim": {
                                "enable": true,
                                "speed": 2,
                                "size_min": 0.1,
                                "sync": false
                            }
                        },
                        "line_linked": {
                            "enable": true,
                            "distance": 150,
                            "color": document.body.classList.contains('dark-mode') ? "#00c6ff" : "#ffffff",
                            "opacity": 0.4,
                            "width": 1
                        },
                        "move": {
                            "enable": true,
                            "speed": 2,
                            "direction": "none",
                            "random": false,
                            "straight": false,
                            "out_mode": "out",
                            "bounce": false,
                            "attract": {
                                "enable": false,
                                "rotateX": 600,
                                "rotateY": 1200
                            }
                        }
                    },
                    "interactivity": {
                        "detect_on": "canvas",
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "grab"
                            },
                            "onclick": {
                                "enable": true,
                                "mode": "push"
                            },
                            "resize": true
                        },
                        "modes": {
                            "grab": {
                                "distance": 140,
                                "line_linked": {
                                    "opacity": 1
                                }
                            },
                            "push": {
                                "particles_nb": 4
                            }
                        }
                    },
                    "retina_detect": true
                });
            }
        });
    }
    
    // Create neural network visualization
    function createNeuralNetwork() {
        const container = document.getElementById('neuralNetwork');
        if (!container) return;
        
        // Clear existing content
        container.innerHTML = '';
        
        // Create SVG for neural network
        const svgNS = "http://www.w3.org/2000/svg";
        const svg = document.createElementNS(svgNS, "svg");
        svg.setAttribute("width", "100%");
        svg.setAttribute("height", "100%");
        svg.setAttribute("preserveAspectRatio", "none");
        
        // Create neural connections
        for (let i = 0; i < 30; i++) {
            const line = document.createElementNS(svgNS, "line");
            const x1 = Math.random() * 100;
            const y1 = Math.random() * 100;
            const x2 = Math.random() * 100;
            const y2 = Math.random() * 100;
            
            line.setAttribute("x1", `${x1}%`);
            line.setAttribute("y1", `${y1}%`);
            line.setAttribute("x2", `${x2}%`);
            line.setAttribute("y2", `${y2}%`);
            line.setAttribute("stroke", document.body.classList.contains('dark-mode') ? "rgba(0, 198, 255, 0.3)" : "rgba(102, 126, 234, 0.3)");
            line.setAttribute("stroke-width", "0.5");
            
            // Animate the lines
            line.style.animation = `pulse ${2 + Math.random() * 3}s infinite`;
            
            svg.appendChild(line);
        }
        
        container.appendChild(svg);
        
        // Add CSS for animation
        if (!document.getElementById('neuralAnimation')) {
            const style = document.createElement('style');
            style.id = 'neuralAnimation';
            style.textContent = `
                @keyframes pulse {
                    0% { opacity: 0.2; }
                    50% { opacity: 0.8; }
                    100% { opacity: 0.2; }
                }
            `;
            document.head.appendChild(style);
        }
    }
    
    // Create matrix code rain effect
    function createMatrixRain() {
        const container = document.getElementById('matrixRain');
        if (!container) return;
        
        // Clear existing content
        container.innerHTML = '';
        
        // Create canvas for matrix effect
        const canvas = document.createElement('canvas');
        container.appendChild(canvas);
        
        const ctx = canvas.getContext('2d');
        
        // Set canvas dimensions
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;
        
        // Matrix characters
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#@%&*";
        const charArray = chars.split('');
        
        // Set font size and columns
        const fontSize = 14;
        const columns = canvas.width / fontSize;
        
        // Create drops for each column
        const drops = [];
        for (let i = 0; i < columns; i++) {
            drops[i] = Math.floor(Math.random() * canvas.height / fontSize);
        }
        
        // Draw function
        function draw() {
            // Semi-transparent black rectangle to create fade effect
            ctx.fillStyle = document.body.classList.contains('dark-mode') ? 
                'rgba(10, 10, 26, 0.05)' : 'rgba(248, 249, 250, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            ctx.fillStyle = document.body.classList.contains('dark-mode') ? '#00c6ff' : '#667eea';
            ctx.font = `${fontSize}px monospace`;
            
            for (let i = 0; i < drops.length; i++) {
                const text = charArray[Math.floor(Math.random() * charArray.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);
                
                // Reset drop if it reaches bottom or randomly
                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                
                drops[i]++;
            }
        }
        
        // Animation loop
        setInterval(draw, 50);
        
        // Handle window resize
        window.addEventListener('resize', function() {
            canvas.width = container.clientWidth;
            canvas.height = container.clientHeight;
        });
    }
    
    // Initialize theme elements
    setTimeout(() => {
        createNeuralNetwork();
        createMatrixRain();
    }, 2000);
    
    // Initialize particles.js
    if (document.getElementById("particles-js")) {
        particlesJS("particles-js", {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#ffffff"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 2,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "push": {
                        "particles_nb": 4
                    }
                }
            },
            "retina_detect": true
        });
    }

    // Typing effect for hero section
    const roles = [
        "Python Developer",
        "AI & ML Enthusiast", 
        "Data Science Learner",
        "Tech Innovator",
        "Problem Solver"
    ];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typedTextElement = document.getElementById('typed-text');
    
    function type() {
        if (!typedTextElement) return;
        
        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            // Remove characters
            typedTextElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
        } else {
            // Add characters
            typedTextElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
        }
        
        // Set typing speed
        let typingSpeed = 100;
        
        if (isDeleting) {
            typingSpeed /= 2; // Faster when deleting
        }
        
        // Check if word is complete
        if (!isDeleting && charIndex === currentRole.length) {
            // Pause at end of word
            setTimeout(() => {
                isDeleting = true;
                type();
            }, 1500);
            return;
        } else if (isDeleting && charIndex === 0) {
            // Move to next word
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }
        
        setTimeout(type, typingSpeed);
    }
    
    // Start typing effect
    if (typedTextElement) {
        setTimeout(type, 1000); // Delay to let loading screen finish
    }
    
    // Scroll to top button
    const scrollToTopButton = document.getElementById('scrollToTop');
    
    window.addEventListener('scroll', () => {
        // Show/hide scroll to top button
        if (scrollToTopButton) {
            if (window.pageYOffset > 300) {
                scrollToTopButton.classList.add('visible');
            } else {
                scrollToTopButton.classList.remove('visible');
            }
        }
        
        // Shrink navigation on scroll
        const nav = document.querySelector('.sticky-nav');
        if (nav) {
            if (window.pageYOffset > 100) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        }
        
        // Highlight active section in navigation
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.sticky-nav a');
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
        
        // Animate skill bars when skills section is in view
        const skillsSection = document.getElementById('skills');
        if (skillsSection && skillsSection.getBoundingClientRect().top < window.innerHeight - 100) {
            animateSkillBars();
        }
    });
    
    if (scrollToTopButton) {
        scrollToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Handle certificate image maximization
    function maximizeImage(img) {
        // Create an overlay for the maximized image
        const overlay = document.createElement('div');
        overlay.classList.add('overlay');
        overlay.onclick = function () {
            document.body.removeChild(overlay);
        };

        // Create an image element for the maximized image
        const fullImg = document.createElement('img');
        fullImg.src = img.src;
        fullImg.classList.add('full-image');

        overlay.appendChild(fullImg);
        document.body.appendChild(overlay);
    }
    
    // Attach maximizeImage to window for global access
    window.maximizeImage = maximizeImage;
    
    // Form validation and submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Reset previous errors
            const errorMessages = contactForm.querySelectorAll('.error-message');
            errorMessages.forEach(msg => msg.style.display = 'none');
            
            const inputs = contactForm.querySelectorAll('input, textarea');
            inputs.forEach(input => input.classList.remove('error'));
            
            // Hide previous messages
            const successMessage = contactForm.querySelector('.form-success');
            const errorMessage = contactForm.querySelector('.form-error');
            if (successMessage) successMessage.style.display = 'none';
            if (errorMessage) errorMessage.style.display = 'none';
            
            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            let isValid = true;
            
            // Validate name
            if (!name) {
                document.getElementById('name').classList.add('error');
                document.getElementById('name-error').style.display = 'block';
                isValid = false;
            }
            
            // Validate email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email) {
                document.getElementById('email').classList.add('error');
                document.getElementById('email-error').style.display = 'block';
                isValid = false;
            } else if (!emailRegex.test(email)) {
                document.getElementById('email').classList.add('error');
                document.getElementById('email-error').textContent = 'Please enter a valid email address';
                document.getElementById('email-error').style.display = 'block';
                isValid = false;
            }
            
            // Validate message
            if (!message) {
                document.getElementById('message').classList.add('error');
                document.getElementById('message-error').style.display = 'block';
                isValid = false;
            }
            
            if (isValid) {
                // Disable submit button during submission
                const submitBtn = contactForm.querySelector('.submit-btn');
                const originalText = submitBtn.textContent;
                submitBtn.textContent = 'Sending...';
                submitBtn.disabled = true;
                
                // Simulate form submission (in a real application, you would send to a server)
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    
                    // Show success message
                    if (successMessage) {
                        successMessage.textContent = 'Thank you for your message! I will get back to you soon.';
                        successMessage.style.display = 'block';
                    }
                    
                    // Reset form
                    contactForm.reset();
                }, 2000);
            }
        });
    }
    
    // Add animation classes to elements when they come into view
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // Observe certification items
    const certificationItems = document.querySelectorAll('.certification-item');
    certificationItems.forEach(item => {
        observer.observe(item);
    });
    
    // Observe qualification items
    const qualificationItems = document.querySelectorAll('.qualification-item');
    qualificationItems.forEach(item => {
        observer.observe(item);
    });
    
    // Observe skill items
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        observer.observe(item);
    });
    
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.sticky-nav ul');
    
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('show');
            console.log('Menu toggle clicked'); // Debug line
            console.log('Nav class list:', nav.classList); // Debug line
        });
        
        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.sticky-nav a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('show');
                console.log('Nav link clicked, menu closed'); // Debug line
            });
        });
    }
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.sticky-nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animate skill bars
    function animateSkillBars() {
        const skillBars = document.querySelectorAll('.skill-progress');
        skillBars.forEach(bar => {
            if (!bar.style.width || bar.style.width === '0px') {
                // Get the target width from data attribute or set a default
                const targetWidth = bar.parentElement.getAttribute('data-progress') || '80%';
                bar.style.width = targetWidth;
            }
        });
    }
    
    // Initialize skill bars with data attributes
    const skillContainers = document.querySelectorAll('.skill-bar');
    skillContainers.forEach((container, index) => {
        // Set different progress values for different skills
        const progressValues = ['90%', '50%', '70%', '75%', '70%', '50%'];
        const value = progressValues[index % progressValues.length];
        container.setAttribute('data-progress', value);
        
        // Create progress element if it doesn't exist
        if (!container.querySelector('.skill-progress')) {
            const progress = document.createElement('div');
            progress.className = 'skill-progress';
            container.appendChild(progress);
        }
    });
});

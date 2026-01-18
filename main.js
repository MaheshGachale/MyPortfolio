document.addEventListener('DOMContentLoaded', () => {
    // Initialize EmailJS with environment variable
    const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'qDAoyswbaALvGHlQK';
    if (typeof emailjs !== 'undefined') {
        emailjs.init({
            publicKey: EMAILJS_PUBLIC_KEY,
        });
    }

    // Landing Choice Screen
    const landingChoice = document.getElementById('landingChoice');
    const mainContent = document.getElementById('mainContent');
    const portfolioCard = document.querySelector('.portfolio-card');
    const mentorshipCard = document.querySelector('.mentorship-card');
    const skipToPortfolio = document.getElementById('skipToPortfolio');

    // Handle Portfolio Card Click
    if (portfolioCard) {
        portfolioCard.addEventListener('click', () => {
            transitionToContent('portfolio');
        });
    }

    // Handle Mentorship Card Click
    if (mentorshipCard) {
        mentorshipCard.addEventListener('click', () => {
            // Navigate to mentorship page
            window.location.href = 'mentorship.html';
        });
    }

    // Handle Skip Link
    if (skipToPortfolio) {
        skipToPortfolio.addEventListener('click', (e) => {
            e.preventDefault();
            transitionToContent('portfolio');
        });
    }

    function transitionToContent(choice) {
        // Add fade-out animation
        landingChoice.classList.add('fade-out');

        // Wait for animation to complete
        setTimeout(() => {
            landingChoice.style.display = 'none';
            mainContent.classList.remove('hidden');

            // If mentorship was chosen, scroll to topmate section
            if (choice === 'mentorship') {
                setTimeout(() => {
                    const topmateSection = document.querySelector('.topmate-section');
                    if (topmateSection) {
                        topmateSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }, 100);
            } else {
                // Scroll to top for portfolio
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }, 600);
    }

    // Header Scroll Effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        });
    }

    // Scroll Reveal Animation using Intersection Observer
    const revealElements = document.querySelectorAll('.reveal, .reveal-up, .reveal-left, .reveal-right');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // Smooth Scrolling for Nav Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = header.offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    mobileMenuBtn.classList.remove('active');
                    navLinks.style.display = '';
                }
            }
        });
    });

    // Form Submission Feedback & Celebration
    const contactForm = document.getElementById('contactForm');
    const formFeedback = document.getElementById('formFeedback');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.textContent;

            btn.disabled = true;
            btn.textContent = 'Sending...';

            // Celebration function
            const celebrate = () => {
                const duration = 3 * 1000;
                const end = Date.now() + duration;

                (function frame() {
                    confetti({
                        particleCount: 7,
                        angle: 60,
                        spread: 55,
                        origin: { x: 0 },
                        colors: ['#4f46e5', '#a855f7', '#22d3ee']
                    });
                    confetti({
                        particleCount: 7,
                        angle: 120,
                        spread: 55,
                        origin: { x: 1 },
                        colors: ['#4f46e5', '#a855f7', '#22d3ee']
                    });

                    if (Date.now() < end) {
                        requestAnimationFrame(frame);
                    }
                }());
            };

            // EmailJS Integration
            const templateParams = {
                name: contactForm.name.value,
                email: contactForm.email.value,
                message: contactForm.message.value,
                time: new Date().toLocaleString()
            };

            emailjs.send('service_aw4ysry', 'template_m2s513l', templateParams)
                .then(() => {
                    contactForm.reset();
                    btn.disabled = false;
                    btn.textContent = originalText;

                    formFeedback.textContent = 'Message sent to Mahesh successfully! 🎉';
                    formFeedback.style.color = '#10b981';

                    // Trigger Confetti
                    celebrate();

                    setTimeout(() => {
                        formFeedback.textContent = '';
                    }, 8000);
                })
                .catch((error) => {
                    btn.disabled = false;
                    btn.textContent = originalText;
                    formFeedback.textContent = 'Failed to send message. Please try again.';
                    formFeedback.style.color = '#ef4444';
                    console.error('EmailJS Error:', error);
                });
        });
    }

    // Skills Tag Animation
    const tags = document.querySelectorAll('.tag');
    tags.forEach((tag, index) => {
        tag.style.transitionDelay = `${index * 0.05}s`;
    });
});

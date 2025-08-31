// Enhanced Mobile Navigation Toggle with luxury effects
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
    
    // Add luxury click effect
    navToggle.style.transform = 'scale(0.95)';
    navToggle.style.boxShadow = '0 0 20px rgba(245, 158, 11, 0.4)';
    
    setTimeout(() => {
        navToggle.style.transform = '';
        navToggle.style.boxShadow = '';
    }, 200);
    
    // Add haptic feedback on mobile
    if ('vibrate' in navigator) {
        navigator.vibrate(30);
    }
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

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

// Enhanced navbar background change on scroll with luxury effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const logoIcon = document.querySelector('.logo-icon');
    const navMenu = document.querySelector('.nav-menu');
    const scrolled = window.scrollY;
    
    if (scrolled > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 15px 40px rgba(15, 23, 42, 0.2)';
        navbar.style.backdropFilter = 'blur(25px)';
        navbar.style.webkitBackdropFilter = 'blur(25px)';
        navbar.style.borderBottom = '2px solid rgba(245, 158, 11, 0.15)';
        
        // Enhanced logo effect
        if (logoIcon) {
            logoIcon.style.transform = 'scale(1.05)';
            logoIcon.style.boxShadow = '0 8px 25px rgba(245, 158, 11, 0.3)';
        }
        
        // Enhanced nav menu effect
        if (navMenu) {
            navMenu.style.background = 'rgba(255, 255, 255, 0.15)';
            navMenu.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.1)';
        }
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.07)';
        navbar.style.backdropFilter = 'blur(25px)';
        navbar.style.webkitBackdropFilter = 'blur(25px)';
        navbar.style.borderBottom = '2px solid rgba(245, 158, 11, 0.1)';
        
        // Reset logo effect
        if (logoIcon) {
            logoIcon.style.transform = 'scale(1)';
            logoIcon.style.boxShadow = '';
        }
        
        // Reset nav menu effect
        if (navMenu) {
            navMenu.style.background = 'rgba(255, 255, 255, 0.1)';
            navMenu.style.boxShadow = '';
        }
    }
});

// Intersection Observer for animations with luxury effects
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('loaded');
            
            // Add luxury hover effects for partner cards
            if (entry.target.classList.contains('partner-card')) {
                entry.target.style.transform = 'translateY(0) scale(1)';
                entry.target.style.opacity = '1';
            }
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.product-card, .service-item, .feature, .contact-item, .partner-card');
    animateElements.forEach(el => {
        el.classList.add('loading');
        observer.observe(el);
    });
    
    // Initialize partner cards with staggered animation
    const partnerCards = document.querySelectorAll('.partner-card');
    partnerCards.forEach((card, index) => {
        card.style.transform = 'translateY(30px) scale(0.95)';
        card.style.opacity = '0';
        card.style.transition = `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`;
    });
});

// Contact form handling with luxury feedback
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = formData.get('name');
        const phone = formData.get('phone');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // Basic validation
        if (!name || !phone || !message) {
            showNotification('Lütfen tüm zorunlu alanları doldurun.', 'error');
            return;
        }
        
        // Phone number validation
        const phoneRegex = /^[0-9\s\-\+\(\)]{10,}$/;
        if (!phoneRegex.test(phone)) {
            showNotification('Lütfen geçerli bir telefon numarası girin.', 'error');
            return;
        }
        
        // Email validation (if provided)
        if (email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showNotification('Lütfen geçerli bir e-posta adresi girin.', 'error');
                return;
            }
        }
        
        // Simulate form submission with luxury loading effect
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<span>Gönderiliyor...</span><i class="fas fa-spinner fa-spin"></i>';
        submitBtn.disabled = true;
        
        // Add luxury loading animation
        submitBtn.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        
        // Simulate API call
        setTimeout(() => {
            showNotification('Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.', 'success');
            this.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            submitBtn.style.background = '';
        }, 2000);
    });
}

// Enhanced notification system with luxury styling
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <div class="notification-icon">
                <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
            </div>
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add luxury styles
    const bgColor = type === 'success' ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)' : 
                   type === 'error' ? 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)' : 
                   'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)';
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${bgColor};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        transform: translateX(100%) scale(0.8);
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        max-width: 400px;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in with luxury effect
    setTimeout(() => {
        notification.style.transform = 'translateX(0) scale(1)';
    }, 100);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(100%) scale(0.8)';
        setTimeout(() => notification.remove(), 400);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(100%) scale(0.8)';
            setTimeout(() => notification.remove(), 400);
        }
    }, 5000);
}



// Enhanced parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector('.hero-background');
    const heroPattern = document.querySelector('.hero-pattern');
    
    if (heroBackground) {
        heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
    
    if (heroPattern) {
        heroPattern.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// Add luxury loading animation to page elements
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Animate sections on load with staggered effect
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        setTimeout(() => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, index * 200);
    });
    
    // Add luxury entrance animation for hero elements
    const heroElements = document.querySelectorAll('.hero-text');
    heroElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        setTimeout(() => {
            element.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 300);
    });
});

// Initialize page animations with luxury effects
document.addEventListener('DOMContentLoaded', () => {
    // Set initial styles for animations
    const sections = document.querySelectorAll('section:not(.hero)');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    });
    
    // Enhanced luxury hover effects to product cards with mobile support
document.querySelectorAll('.product-card').forEach(card => {
    const handleHover = (isHovering) => {
        if (isHovering) {
            card.style.transform = 'translateY(-12px) scale(1.03)';
            card.style.boxShadow = '0 35px 70px rgba(0, 0, 0, 0.25)';
            card.style.borderColor = '#f59e0b';
            
            // Add luxury glow effect
            card.style.boxShadow += ', 0 0 30px rgba(245, 158, 11, 0.2)';
        } else {
            card.style.transform = 'translateY(0) scale(1)';
            card.style.boxShadow = '';
            card.style.borderColor = '';
        }
    };
    
    // Desktop hover
    card.addEventListener('mouseenter', () => handleHover(true));
    card.addEventListener('mouseleave', () => handleHover(false));
    
    // Mobile touch effects
    card.addEventListener('touchstart', () => handleHover(true));
    card.addEventListener('touchend', () => {
        setTimeout(() => handleHover(false), 300);
    });
});
    
    // Enhanced luxury hover effects to partner cards with mobile support
document.querySelectorAll('.partner-card').forEach(card => {
    const handleHover = (isHovering) => {
        if (isHovering) {
            card.style.transform = 'translateY(-10px) scale(1.02)';
            card.style.boxShadow = '0 30px 60px rgba(0, 0, 0, 0.2)';
            card.style.borderColor = '#f59e0b';
            
            // Add luxury glow effect
            card.style.boxShadow += ', 0 0 25px rgba(245, 158, 11, 0.15)';
        } else {
            card.style.transform = 'translateY(0) scale(1)';
            card.style.boxShadow = '';
            card.style.borderColor = '';
        }
    };
    
    // Desktop hover
    card.addEventListener('mouseenter', () => handleHover(true));
    card.addEventListener('mouseleave', () => handleHover(false));
    
    // Mobile touch effects
    card.addEventListener('touchstart', () => handleHover(true));
    card.addEventListener('touchend', () => {
        setTimeout(() => handleHover(false), 300);
    });
});
    
    // Enhanced click-to-call functionality with luxury feedback
const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
phoneLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        // Add haptic feedback on mobile
        if ('vibrate' in navigator) {
            navigator.vibrate(50);
        }
        
        // Add luxury click effect with glow
        link.style.transform = 'scale(0.95)';
        link.style.boxShadow = '0 0 20px rgba(245, 158, 11, 0.5)';
        link.style.transition = 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)';
        
        setTimeout(() => {
            link.style.transform = 'scale(1)';
            link.style.boxShadow = '';
        }, 200);
        
        // Add success notification
        showNotification('Aranıyor...', 'info');
    });
});
    
    // Add Mercury Software link tracking with luxury effects
const mercuryLink = document.querySelector('.mercury-link');
if (mercuryLink) {
    mercuryLink.addEventListener('click', () => {
        console.log('Mercury Software link clicked');
        
        // Add luxury click effect
        mercuryLink.style.transform = 'scale(0.95)';
        mercuryLink.style.boxShadow = '0 0 30px rgba(245, 158, 11, 0.8)';
        
        setTimeout(() => {
            mercuryLink.style.transform = '';
            mercuryLink.style.boxShadow = '';
        }, 300);
        
        // Add haptic feedback on mobile
        if ('vibrate' in navigator) {
            navigator.vibrate(50);
        }
        
        // Show notification
        showNotification('Mercury Software sayfasına yönlendiriliyorsunuz...', 'info');
    });
}

// Add footer luxury effects
const footerSections = document.querySelectorAll('.footer-section');
const footerLogo = document.querySelector('.footer-logo');
const socialLinks = document.querySelectorAll('.social-links a');

// Footer sections staggered animation
footerSections.forEach((section, index) => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    setTimeout(() => {
        section.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        section.style.opacity = '1';
        section.style.transform = 'translateY(0)';
    }, 1000 + (index * 200));
});

// Footer logo animation
if (footerLogo) {
    footerLogo.style.opacity = '0';
    footerLogo.style.transform = 'scale(0.9) translateY(20px)';
    setTimeout(() => {
        footerLogo.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        footerLogo.style.opacity = '1';
        footerLogo.style.transform = 'scale(1) translateY(0)';
    }, 1200);
}

// Social links animation
socialLinks.forEach((link, index) => {
    link.style.opacity = '0';
    link.style.transform = 'scale(0.8) rotate(180deg)';
    setTimeout(() => {
        link.style.transition = 'all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
        link.style.opacity = '1';
        link.style.transform = 'scale(1) rotate(0deg)';
    }, 1400 + (index * 100));
});

// Add social media link tracking with luxury effects
const instagramLinks = document.querySelectorAll('a[href*="instagram"]');
const facebookLinks = document.querySelectorAll('a[href*="facebook"]');
    
    instagramLinks.forEach(link => {
        link.addEventListener('click', () => {
            console.log('Instagram link clicked');
            // Add luxury click effect
            link.style.transform = 'scale(0.9) rotate(5deg)';
            setTimeout(() => {
                link.style.transform = 'scale(1) rotate(0deg)';
            }, 200);
        });
    });
    
    facebookLinks.forEach(link => {
        link.addEventListener('click', () => {
            console.log('Facebook link clicked');
            // Add luxury click effect
            link.style.transform = 'scale(0.9) rotate(-5deg)';
            setTimeout(() => {
                link.style.transform = 'scale(1) rotate(0deg)';
            }, 200);
        });
    });
});

// Add enhanced CSS for notifications
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    .notification-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
    }
    
    .notification-icon {
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 50%;
        flex-shrink: 0;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0;
        line-height: 1;
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all 0.3s ease;
    }
    
    .notification-close:hover {
        background: rgba(255, 255, 255, 0.2);
        transform: scale(1.1);
    }
    
    .notification-message {
        flex: 1;
        font-weight: 500;
    }
`;
document.head.appendChild(notificationStyles);

// Add luxury scroll progress indicator
const progressBar = document.createElement('div');
progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 4px;
    background: linear-gradient(90deg, #d69e2e, #f6e05e, #667eea);
    z-index: 10001;
    transition: width 0.1s ease;
    box-shadow: 0 2px 10px rgba(214, 158, 46, 0.3);
`;
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.body.offsetHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    progressBar.style.width = scrollPercent + '%';
});

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    // Escape key to close mobile menu
    if (e.key === 'Escape') {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
    
    // Enter key to submit form when focused on submit button
    if (e.key === 'Enter' && document.activeElement.type === 'submit') {
        document.activeElement.click();
    }
});

// Enhanced mobile touch gesture support
let touchStartY = 0;
let touchEndY = 0;
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (e) => {
    touchStartY = e.changedTouches[0].screenY;
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', (e) => {
    touchEndY = e.changedTouches[0].screenY;
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diffY = touchStartY - touchEndY;
    const diffX = touchStartX - touchEndX;
    
    if (Math.abs(diffY) > swipeThreshold || Math.abs(diffX) > swipeThreshold) {
        if (Math.abs(diffY) > Math.abs(diffX)) {
            if (diffY > 0) {
                // Swipe up - could be used for navigation
                console.log('Swipe up detected');
            } else {
                // Swipe down - could be used for navigation
                console.log('Swipe down detected');
            }
        } else {
            if (diffX > 0) {
                // Swipe left
                console.log('Swipe left detected');
            } else {
                // Swipe right
                console.log('Swipe right detected');
            }
        }
    }
}

// Mobile-specific optimizations
function optimizeForMobile() {
    const isMobile = window.innerWidth <= 768;
    
    if (isMobile) {
        // Reduce particle count on mobile for better performance
        const particles = document.querySelectorAll('[style*="position: absolute"]');
        particles.forEach((particle, index) => {
            if (index > 20) {
                particle.style.display = 'none';
            }
        });
        
        // Optimize animations for mobile
        document.body.style.setProperty('--transition', 'all 0.3s ease');
        document.body.style.setProperty('--transition-bounce', 'all 0.3s ease');
        
        // Add mobile-specific touch feedback
        const touchElements = document.querySelectorAll('.btn, .nav-link, .product-card, .service-item, .partner-card');
        touchElements.forEach(element => {
            element.addEventListener('touchstart', () => {
                element.style.transform = 'scale(0.98)';
            });
            
            element.addEventListener('touchend', () => {
                setTimeout(() => {
                    element.style.transform = '';
                }, 150);
            });
        });
    }
}

// Call mobile optimization on load and resize
window.addEventListener('load', optimizeForMobile);
window.addEventListener('resize', optimizeForMobile);

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(() => {
    // Handle scroll-based animations here
}, 16);

window.addEventListener('scroll', debouncedScrollHandler);

// Add luxury service worker for offline functionality
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Add luxury meta viewport for better mobile experience
const viewport = document.querySelector('meta[name="viewport"]');
if (!viewport) {
    const meta = document.createElement('meta');
    meta.name = 'viewport';
    meta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
    document.head.appendChild(meta);
}

// Enhanced luxury loading screen
const loadingScreen = document.createElement('div');
loadingScreen.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10000;
    transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
`;

loadingScreen.innerHTML = `
    <div style="text-align: center; color: white;">
        <div style="width: 80px; height: 80px; border: 4px solid rgba(255,255,255,0.2); border-top: 4px solid #f59e0b; border-radius: 50%; animation: spin 1.2s linear infinite; margin: 0 auto 2rem; box-shadow: 0 0 30px rgba(245, 158, 11, 0.3);"></div>
        <h2 style="margin: 0; font-family: 'Playfair Display', serif; font-size: 2.5rem; background: linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">ÖZGÜR YAPI</h2>
        <p style="margin: 1rem 0 0 0; opacity: 0.9; font-size: 1.1rem;">Premium Tesisat Çözümleri Yükleniyor...</p>
        <div style="width: 200px; height: 4px; background: rgba(255,255,255,0.2); border-radius: 2px; margin: 1.5rem auto 0; overflow: hidden;">
            <div style="width: 60%; height: 100%; background: linear-gradient(90deg, #f59e0b, #fbbf24); border-radius: 2px; animation: loading 2s ease-in-out infinite;"></div>
        </div>
    </div>
`;

document.body.appendChild(loadingScreen);

// Enhanced luxury animations
const luxuryAnimations = document.createElement('style');
luxuryAnimations.textContent = `
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    
    @keyframes loading {
        0%, 100% { transform: translateX(-100%); }
        50% { transform: translateX(100%); }
    }
    
    @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
    }
    
    @keyframes glow {
        0%, 100% { box-shadow: 0 0 20px rgba(245, 158, 11, 0.3); }
        50% { box-shadow: 0 0 40px rgba(245, 158, 11, 0.6); }
    }
    
    .floating {
        animation: float 3s ease-in-out infinite;
    }
    
    .glowing {
        animation: glow 2s ease-in-out infinite;
    }
`;
document.head.appendChild(luxuryAnimations);

// Remove loading screen when page is loaded
window.addEventListener('load', () => {
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.remove();
        }, 500);
    }, 1000);
});

// Add luxury particle effects
function createParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
        overflow: hidden;
    `;
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: rgba(245, 158, 11, 0.3);
            border-radius: 50%;
            animation: float ${3 + Math.random() * 4}s ease-in-out infinite;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation-delay: ${Math.random() * 2}s;
        `;
        particlesContainer.appendChild(particle);
    }
    
    document.body.appendChild(particlesContainer);
}

// Initialize luxury effects
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    
    // Add luxury header animations
    const logoIcon = document.querySelector('.logo-icon');
    const logoText = document.querySelector('.logo-text');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Logo entrance animation
    if (logoIcon) {
        logoIcon.style.opacity = '0';
        logoIcon.style.transform = 'scale(0.8) translateY(-20px)';
        setTimeout(() => {
            logoIcon.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
            logoIcon.style.opacity = '1';
            logoIcon.style.transform = 'scale(1) translateY(0)';
        }, 100);
    }
    
    if (logoText) {
        logoText.style.opacity = '0';
        logoText.style.transform = 'translateX(-30px)';
        setTimeout(() => {
            logoText.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
            logoText.style.opacity = '1';
            logoText.style.transform = 'translateX(0)';
        }, 300);
    }
    
    // Nav links staggered animation
    navLinks.forEach((link, index) => {
        link.style.opacity = '0';
        link.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            link.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
            link.style.opacity = '1';
            link.style.transform = 'translateY(0)';
        }, 500 + (index * 100));
    });
    
    // Add luxury cursor effect
    const cursor = document.createElement('div');
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        background: radial-gradient(circle, rgba(245, 158, 11, 0.8) 0%, transparent 70%);
        border-radius: 50%;
        pointer-events: none;
        z-index: 10000;
        transition: transform 0.1s ease;
        transform: translate(-50%, -50%);
    `;
    document.body.appendChild(cursor);
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
    
    // Add luxury click effect
    document.addEventListener('click', (e) => {
        const ripple = document.createElement('div');
        ripple.style.cssText = `
            position: fixed;
            width: 40px;
            height: 40px;
            background: radial-gradient(circle, rgba(245, 158, 11, 0.6) 0%, transparent 70%);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            left: ${e.clientX - 20}px;
            top: ${e.clientY - 20}px;
            animation: ripple 0.6s ease-out;
        `;
        document.body.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple animation
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes ripple {
        0% {
            transform: scale(0);
            opacity: 1;
        }
        100% {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

console.log('ÖZGÜR YAPI premium luxury website loaded successfully! 🏗️✨💎');

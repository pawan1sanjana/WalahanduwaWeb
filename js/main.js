    // Initialize AOS
    AOS.init({
        duration: 800,
        once: true,
        offset: 100
    });

// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const html = document.documentElement;

// Check for saved theme or default to light
const savedTheme = localStorage.getItem('theme') || 'light';
html.classList.toggle('dark', savedTheme === 'dark');
updateThemeIcon(savedTheme);

themeToggle.addEventListener('click', function () {
    const isDark = html.classList.contains('dark');
    const newTheme = isDark ? 'light' : 'dark';

    html.classList.toggle('dark');
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);

    // Add a nice transition effect
    themeToggle.classList.add('animate-spin');
    setTimeout(() => {
        themeToggle.classList.remove('animate-spin');
    }, 300);
});

function updateThemeIcon(theme) {
    if (theme === 'dark') {
        themeIcon.className = 'fas fa-sun text-lg';
    } else {
        themeIcon.className = 'fas fa-moon text-lg';
    }
}



  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');

  btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });
  

// Scroll to top functionality
const scrollToTopBtn = document.getElementById('scroll-to-top');

window.addEventListener('scroll', function () {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.remove('opacity-0', 'invisible');
        scrollToTopBtn.classList.add('opacity-100', 'visible');
    } else {
        scrollToTopBtn.classList.add('opacity-0', 'invisible');
        scrollToTopBtn.classList.remove('opacity-100', 'visible');
    }
});

scrollToTopBtn.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Combine loader and WhatsApp popup functionality on window load
window.addEventListener("load", () => {
    // Hide loader after delay
    const loader = document.getElementById("loader");
    loader.classList.add("opacity-0");
    setTimeout(() => {
        loader.classList.add("hidden");
    }, 1800);

    // WhatsApp popup functionality
    const popup = document.getElementById("whatsapp-popup");
    const sound = document.getElementById("guidance-sound");

    setTimeout(() => {
        popup.classList.remove("opacity-0", "translate-y-5");
        popup.classList.add("opacity-100", "translate-y-0");
        sound.play();
    }, 2000);
});

// Close WhatsApp popup
function closePopup() {
    const popup = document.getElementById("whatsapp-popup");
    popup.classList.add("opacity-0", "translate-y-5");
    popup.classList.remove("opacity-100", "translate-y-0");
}

// Form animation on focus
    document.querySelectorAll('.form-input').forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('transform', 'scale-105');
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.classList.remove('transform', 'scale-105');
        });
    });

    // Add staggered animation to navigation items
    document.querySelectorAll('nav a').forEach((link, index) => {
        link.style.animationDelay = `${index * 0.1}s`;
        link.classList.add('animate-fadeInUp');
    });

    // Parallax effect for breadcrumb section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const breadcrumb = document.querySelector('.bg-gradient-to-r');
        if (breadcrumb) {
            breadcrumb.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // Add smooth hover effects to cards
    document.querySelectorAll('.card-hover').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Newsletter form animation
    document.querySelector('footer form').addEventListener('submit', function(e) {
        e.preventDefault();
        const button = this.querySelector('button');
        const originalText = button.innerHTML;
        
        button.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Subscribing...';
        button.disabled = true;
        
        setTimeout(() => {
            button.innerHTML = '<i class="fas fa-check mr-2"></i>Subscribed!';
            button.classList.add('bg-green-500');
            
            setTimeout(() => {
                button.innerHTML = originalText;
                button.disabled = false;
                button.classList.remove('bg-green-500');
            }, 2000);
        }, 1500);
    });


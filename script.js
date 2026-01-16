// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('shadow-lg');
        navbar.style.background = 'rgba(15, 23, 42, 0.95)';
    } else {
        navbar.classList.remove('shadow-lg');
        navbar.style.background = 'rgba(15, 23, 42, 0.8)';
    }
});

// Number Counter Animation
const counters = document.querySelectorAll('.counter');
const speed = 200;

const animateCounters = () => {
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const inc = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 20);
            } else {
                counter.innerText = target + (target === 99 || target === 100 ? '%' : '+');
            }
        };
        updateCount();
    });
};

// Trigger animation when stats section is in view
let counted = false;
const observer = new IntersectionObserver((entries) => {
    if(entries[0].isIntersecting && !counted) {
        animateCounters();
        counted = true;
    }
});

const statsSection = document.querySelector('.counter');
if(statsSection) {
    observer.observe(statsSection.parentElement.parentElement);
}

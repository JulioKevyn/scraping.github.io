document.addEventListener("DOMContentLoaded", function() {

    // --- Animação 1: Efeito de Digitação (NOVO) ---
    const typingElement = document.getElementById("typing-effect");
    if (typingElement) {
        const words = ["Leads", "Clientes", "Vendas", "Oportunidades"];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function type() {
            const currentWord = words[wordIndex];
            
            // Se está digitando
            if (!isDeleting) {
                typingElement.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
                
                // Se terminou de digitar a palavra
                if (charIndex == currentWord.length) {
                    isDeleting = true;
                    setTimeout(type, 2000); // Pausa de 2s
                } else {
                    setTimeout(type, 100); // Velocidade de digitação
                }
            } 
            // Se está apagando
            else {
                typingElement.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
                
                // Se terminou de apagar
                if (charIndex == 0) {
                    isDeleting = false;
                    wordIndex = (wordIndex + 1) % words.length; // Próxima palavra
                    setTimeout(type, 500); // Pausa antes de digitar nova
                } else {
                    setTimeout(type, 50); // Velocidade de apagar
                }
            }
        }
        
        type(); // Inicia o efeito
    }


    // --- Animação 2: Animar elementos ao rolar (Scroll) ---
    const animatedElements = document.querySelectorAll(".animate-on-scroll");
    if (animatedElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                }
            });
        }, {
            threshold: 0.1
        });

        animatedElements.forEach(element => {
            observer.observe(element);
        });
    }


    // --- Animação 3: Rolagem Suave dos Links ---
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"], .cta-button[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop;
                window.scrollTo({
                    top: offsetTop - 80, // Desconta 80px pela altura da navbar
                    behavior: 'smooth'
                });
                // Fecha o menu mobile se estiver aberto
                document.getElementById('mobile-menu').classList.remove('active');
                document.querySelector('.nav-links').classList.remove('active');
            }
        });
    });

    // --- Lógica 4: Menu Hamburger (NOVO) ---
    const menuToggle = document.getElementById('mobile-menu');
    const navLinksList = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navLinksList.classList.toggle('active');
        });
    }

});
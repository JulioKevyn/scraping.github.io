document.addEventListener("DOMContentLoaded", function() {

    // --- Animação 1: Animar elementos ao rolar (Scroll) ---

    // Seleciona todos os elementos que queremos animar
    const animatedElements = document.querySelectorAll(".animate-on-scroll");

    if (animatedElements.length > 0) {
        // Cria um "observador" que vigia quando os elementos entram na tela
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                // Se o elemento está visível
                if (entry.isIntersecting) {
                    // Adiciona a classe 'is-visible' para ativar a animação CSS
                    entry.target.classList.add("is-visible");
                    
                    // (Opcional) Para de observar o elemento depois que ele já animou
                    // observer.unobserve(entry.target); 
                }
                // (Opcional) Se quiser que a animação rode toda vez, e não só uma
                // else {
                //    entry.target.classList.remove("is-visible");
                // }
            });
        }, {
            threshold: 0.1 // Ativa quando 10% do elemento está visível
        });

        // Diz ao observador para vigiar cada um dos nossos elementos
        animatedElements.forEach(element => {
            observer.observe(element);
        });
    }


    // --- Animação 2: Links de Navegação com Rolagem Suave ---
    
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"], .cta-button[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Impede o pulo instantâneo
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Calcula a posição do elemento
                const offsetTop = targetElement.offsetTop;
                
                // Rola suavemente até lá
                window.scrollTo({
                    top: offsetTop - 80, // Desconta 80px pela altura da navbar
                    behavior: 'smooth'
                });
            }
        });
    });

});
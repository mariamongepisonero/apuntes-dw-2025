function ParallaxEffect() {
    const parallaxBg = document.querySelector('.parallax-bg');
    //seleccionamos elemento flotante
    const elementoFlotante = document.querySelector('.parallax-elemento-flotante');

    window.addEventListener('scroll', () => {
        let scrollPos = window.scrollY;
        console.log(scrollPos);

        // Mover el fondo
        // Velocidad 0.3 significa que se mueve al 30% de la velocidad scroll
        parallaxBg.style.transform = `translateY(${scrollPos * 0.3}px)`;

        if (elementoFlotante) {
            // podemos aplicar múltiples movimientos, ej rotación
            let rotation = scrollPos * 0.05; // una rotación pequeña
            // ¡Importante! 'transform: translateY()' es mejor para el rendimiento que cambiar 'top'
            elementoFlotante.style.transform = `translateY(-${scrollPos * 0.6}px) rotate(${rotation}deg)`;
        }
    });

}

ParallaxEffect();


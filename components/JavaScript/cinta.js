export function cinta() {
    const cinta = document.querySelector('.cinta__container');
    
    // Pausar la animación cuando el mouse está sobre la cinta
    cinta.addEventListener('mouseenter', function() {
        this.style.animationPlayState = 'paused';
    });
    
    // Reanudar la animación cuando el mouse sale de la cinta
    cinta.addEventListener('mouseleave', function() {
        this.style.animationPlayState = 'running';
    });
    
    // Duplicar el contenido para un desplazamiento continuo sin espacios
    const contenidoOriginal = cinta.innerHTML;
    cinta.innerHTML += contenidoOriginal;
};
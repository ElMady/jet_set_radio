export function Carrusel () {
    const carruselInner = document.querySelector('.carrusel-inner');
    const items = document.querySelectorAll('.carrusel-item');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const indicadores = document.querySelectorAll('.indicador');
    
    let currentIndex = 0;
    const totalItems = items.length;
    console.log(totalItems);
    
    // Función para actualizar el carrusel
    function updateCarrusel() {
        carruselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        // Actualizar indicadores
        indicadores.forEach((ind, index) => {
            ind.classList.toggle('active', index === currentIndex);
        });
    }
    
    
    // Evento para botón anterior
    prevBtn.addEventListener('click', function() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalItems - 1;
        updateCarrusel();
    });
    
    // Evento para botón siguiente
    nextBtn.addEventListener('click', function() {
        currentIndex = (currentIndex < totalItems - 1) ? currentIndex + 1 : 0;
        updateCarrusel();
    });
    
    // Eventos para indicadores
    indicadores.forEach(ind => {
        ind.addEventListener('click', function() {
            currentIndex = parseInt(this.getAttribute('data-slide-to'));
            updateCarrusel();
        });
    });
    
    // Auto-desplazamiento (opcional)
    let interval = setInterval(() => {
        currentIndex = (currentIndex < totalItems - 1) ? currentIndex + 1 : 0;
        updateCarrusel();
    }, 3000);
    
    // Pausar al pasar el mouse
    carruselInner.parentElement.addEventListener('mouseenter', () => {
        clearInterval(interval);
    });
    
    carruselInner.parentElement.addEventListener('mouseleave', () => {
        interval = setInterval(() => {
            currentIndex = (currentIndex < totalItems - 1) ? currentIndex + 1 : 0;
            updateCarrusel();
        }, 3000);
    });
};
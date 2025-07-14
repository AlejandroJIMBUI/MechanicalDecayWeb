document.addEventListener('DOMContentLoaded', () => {
    // Crear capa de trueno dinámicamente
    const thunderLayer = document.createElement('div');
    thunderLayer.className = 'thunder-layer';
    document.body.prepend(thunderLayer);

    // Crear contenedor de blur
    const blurContainer = document.createElement('div');
    blurContainer.className = 'blur-container';
    
    // Mover elementos existentes al contenedor de blur
    const header = document.querySelector('header');
    const main = document.querySelector('main');
    document.body.insertBefore(blurContainer, thunderLayer.nextSibling);
    blurContainer.appendChild(header);
    blurContainer.appendChild(main);

    // Efectos de blur
    const setBlur = (intensity) => {
        document.documentElement.style.setProperty('--blur-intensity', `${intensity}px`);
    };

    // Efecto aleatorio
    setInterval(() => {
        if(Math.random() > 0.8) {
            setBlur(8);
            setTimeout(() => setBlur(2), 500);
        }
    }, 5000);

    // Efecto al interactuar
    const logo = document.querySelector('.logo_1');
    logo.addEventListener('mouseenter', () => setBlur(4));
    logo.addEventListener('mouseleave', () => setBlur(2));

    // Inicializar con blur sutil
    setBlur(2);
});
document.addEventListener('DOMContentLoaded', () => {
  const logo = document.querySelector('.logo_1');
  let animationId;
  let isHovering = false;
  
  // Parámetros de animación
  const settings = {
    normal: {
      verticalRange: 10,
      rotationRange: 3,
      speed: 0.001,
      verticalSpeed: 1.5,
      rotationSpeed: 1.2,
      offset: Math.PI * 0.25
    },
    hover: {
      verticalRange: 15,
      rotationRange: 5,
      speed: 0.002,
      verticalSpeed: 2,
      rotationSpeed: 1.5,
      offset: Math.PI * 0.5
    }
  };

  function floatAnimation(timestamp, isHover) {
    const config = isHover ? settings.hover : settings.normal;
    const time = timestamp * config.speed;
    
    // Movimiento vertical
    const yPos = -config.verticalRange * Math.sin(time * config.verticalSpeed);
    
    // Rotación más dinámica
    const rotation = config.rotationRange * Math.sin(time * config.rotationSpeed + config.offset);
    
    // Efecto de escala solo en hover
    const scale = isHover ? 1.05 : 1;
    
    // Aplicar transformaciones
    logo.style.transform = `
      translateY(${yPos}px)
      rotate(${rotation}deg)
      scale(${scale})
      translateZ(0)
    `;
    
    animationId = requestAnimationFrame((ts) => floatAnimation(ts, isHover));
  }

  // Eventos de hover
  logo.addEventListener('mouseenter', () => {
    isHovering = true;
    cancelAnimationFrame(animationId);
    floatAnimation(performance.now(), true);
  });

  logo.addEventListener('mouseleave', () => {
    isHovering = false;
    cancelAnimationFrame(animationId);
    floatAnimation(performance.now(), false);
  });

  // Iniciar animación
  floatAnimation(performance.now(), false);
});
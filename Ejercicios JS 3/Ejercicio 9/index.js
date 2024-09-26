// Actualizar la posición del mouse
document.addEventListener('mousemove', (event) => {
    const mousePos = document.getElementById('mousePos');
    mousePos.textContent = `X: ${event.clientX}, Y: ${event.clientY}`;
    //Client es una propiedad del evento que permite saber el posisionamiento del mouse en X e Y 
});

// Actualizar la tecla presionada
document.addEventListener('keydown', (event) => {
    const keyPressed = document.getElementById('keyPressed');
    keyPressed.textContent = event.key;
});
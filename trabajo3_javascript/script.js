// Obtener elementos del DOM
const verDetallesButton = document.getElementById('verDetalles');
const volverButton = document.getElementById('volver');
const tarjeta = document.querySelector('.tarjeta ');

// Función para voltear la tarjeta
verDetallesButton.addEventListener('click', () => { 
   
   document.getElementById('frontal').style.transform = 'rotateY(180deg)';
    // Voltear la tarjeta
   document.getElementById('posterior').style.transform = 'rotateY(0deg)';
 
});

// Función para volver a la cara frontal
volverButton.addEventListener('click', () => {
    document.getElementById('frontal').style.transform = 'rotateY(0deg)';
    //Voltear la tarjeta
    document.getElementById('posterior').style.transform = 'rotateY(180deg)';
});
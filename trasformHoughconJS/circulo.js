// transformada de Hough de circunferencias
function houghTransformCircles(image) {
  /* Convertir la imagen a escala de grises si es necesario
  aplicar cualquier preprocesamiento necesario a la imagen
  aplicar detección de bordes si es necesario
  aplicar la transformada de Hough de circunferencias
  Retornar los círculos detectados */
}

// Cargar la imagen del motor
const image = new Image();
image.src = '/imagen/ejem02.png';
image.onload = function() {
  // Crear HTML para mostrar la imagen original y los resultados
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  document.body.appendChild(canvas);
  
  // Mostrar la imagen original en el lienzo
  canvas.width = image.width;
  canvas.height = image.height;
  context.drawImage(image, 0, 0);
  
  // Aplicar la transformada de Hough de circunferencias a la imagen
  const circles = houghTransformCircles(image);
  
  // Dibujar los círculos detectados en el lienzo
  if (circles !== null) {
    for (let i = 0; i < circles.length; i++) {
      const circle = circles[i];
      const x = circle.x;
      const y = circle.y;
      const radius = circle.radius;
      
      // Dibujar el círculo en el lienzo
      context.beginPath();
      context.arc(x, y, radius, 0, 2 * Math.PI);
      context.strokeStyle = 'red';
      context.lineWidth = 2;
      context.stroke();
    }
  }
};

/**
 La función houghTransformCircles debe implementarse para aplicar los pasos necesarios de preprocesamiento, detección de bordes y la propia transformada de Hough de circunferencias.
despues de cargar la imagen, se crea un HTML para mostrar la imagen original y los resultados. La imagen original se dibuja en en html, y luego se aplica la transformada de Hough de circunferencias llamando a la función. y como ultimo paso los círculos detectados se dibujan.

 */
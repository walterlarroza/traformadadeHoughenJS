//transformada de Hough de rectas.
function houghTransformLines(image) {
  /* Convertir la imagen a escala de grises si es necesario
  aplicar cualquier preprocesamiento necesario a la imagen
  aplicar detección de bordes si es necesario
  aplicar la transformada de Hough de rectas
  retornar las líneas detectadas */
}

// Cargar la imagen 
const image = new Image();
image.src = '/imagen/ejem02';
image.onload = function() {
  // Creo el HTML para mostrar la imagen original y los resultados
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  document.body.appendChild(canvas);
  
  // Muestro la imagen 
  canvas.width = image.width;
  canvas.height = image.height;
  context.drawImage(image, 0, 0);
  
  const lines = houghTransformLines(image);
  
  // muestro la linea detectada
  if (lines !== null) {
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const x1 = line.x1;
      const y1 = line.y1;
      const x2 = line.x2;
      const y2 = line.y2;
      
      // muestro la linea
      context.beginPath();
      context.moveTo(x1, y1);
      context.lineTo(x2, y2);
      context.strokeStyle = 'red';
      context.lineWidth = 2;
      context.stroke();
    }
  }
};

/*
la función aplica los pasos necesarios de preprocesamiento, detección de bordes y la propia transformada de Hough de rectas.
cargar HTML para mostrar la imagen original y los resultados. La imagen original, y luego se aplica la formula de la rectas llamando a la función houghTransformLines. Finalmente, las líneas detectadas se dibujan.

*/
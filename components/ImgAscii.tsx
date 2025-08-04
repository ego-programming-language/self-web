import React, { useEffect, useRef } from 'react';

export const ImgAscii = ({ scale = 1 }: { scale?: number }) => {
  const canvasRef = useRef(null);
  const outputRef = useRef<any>(null);

  useEffect(() => {
    const chars =
      '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()-_=+[]{};:\'",.<>/?\\|`~';

    function processImage() {
      const img = new Image();
      img.src = "CREAT0RS.png";

      img.onload = function () {
        const canvas: any = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

        const originalWidth = img.width;
        const originalHeight = img.height;
        const newWidth = Math.round(originalWidth / 5);
        const newHeight = Math.round(originalHeight / 7);
        canvas.width = newWidth;
        canvas.height = newHeight;

        // Dibujar la imagen en el canvas para extraer los datos de píxeles
        ctx.drawImage(img, 0, 0, newWidth, newHeight);
        const imageData = ctx.getImageData(0, 0, newWidth, newHeight);
        const data = imageData.data;

        // Crear una matriz de píxeles en blanco y negro
        const pixelMatrix: any = [];
        for (let i = 0; i < newHeight; i++) {
          const row = [];
          for (let j = 0; j < newWidth; j++) {
            const index = (i * newWidth + j) * 4;
            const r = data[index],
              g = data[index + 1],
              b = data[index + 2];
            const gray = 0.2126 * r + 0.7152 * g + 0.0722 * b;
            const bw = gray > 128 ? 255 : 0;
            row.push(bw);
          }
          pixelMatrix.push(row);
        }

        let output = '';
        let rowIndex = 0;
        const outputElement: any = outputRef.current;
        if (!outputElement) return;

        // Función para procesar cada fila y actualizar la salida de texto
        function processRow() {
          if (rowIndex < pixelMatrix.length) {
            let line = '';
            for (let pixel of pixelMatrix[rowIndex]) {
              if (pixel === 255) {
                const randomIndex = Math.floor(Math.random() * chars.length);
                line += chars[randomIndex];
              } else {
                line += ' ';
              }
            }
            output += line + '\n';
            outputElement.textContent = output;
            rowIndex++;

            // Se espera 20ms entre cada línea para simular el efecto de escritura progresiva
            setTimeout(processRow, 20);
          } else {
            // Al finalizar, se convierte el contenido en un array para actualizaciones dinámicas
            textArray = outputElement.innerText.split('');
          }
        }
        processRow();
      };

      img.onerror = function () {
        console.error(
          "creat0rs logo cannot be loaded"
        );
      };
    }

    processImage();

    // Actualizar el texto de salida de forma dinámica
    let textArray: any = [];
    function updateText() {
      if (!outputRef.current) return;
      if (textArray.length === 0) {
        requestAnimationFrame(updateText);
        return;
      }
      for (let i = 0; i < textArray.length; i++) {
        // 5% de probabilidad de cambiar un carácter (exceptuando saltos de línea y espacios)
        if (Math.random() < 0.05 && textArray[i] !== '\n' && textArray[i] !== ' ') {
          textArray[i] = chars[Math.floor(Math.random() * chars.length)];
        }
      }
      outputRef.current.innerText = textArray.join('');
      requestAnimationFrame(updateText);
    }
    requestAnimationFrame(updateText);
  }, []);

  return (
    <>
      <canvas id="canvas" style={{ display: 'none' }} ref={canvasRef} />
      <div className='h-[10vh] w-full flex flex-col justify-center items-center relativeoverflow-hidden'>
        <pre
          style={{
            fontFamily: 'monospace',
            fontSize: `${8 * scale}px`,
            lineHeight: `${7 * scale}px`,
            color: '#a3a3a3',
            whiteSpace: 'pre',
          }}
          ref={outputRef}
        />
      </div>

    </>
  );
};


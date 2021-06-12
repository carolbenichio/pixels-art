window.onload = function () {
    const pixelBoard = document.getElementById('pixel-board');
    //5 
    nPixels = 5;
  
    for (let i = 0; i < nPixels; i += 1) {
      const pixelLines = document.createElement('div');
      pixelLines.classList.add('pixel-line');
      pixelBoard.appendChild(pixelLines);
      const eachPixel = document.createElement('div');
      eachPixel.classList.add('pixel');
      pixelLines.appendChild(eachPixel);
      for (let i2 = 1; i2 < nPixels; i2 += 1) {
        const eachPixel = document.createElement('div');
        eachPixel.classList.add('pixel');
        pixelLines.appendChild(eachPixel);
      }
      function putColor(event) { //8
        const selectedColor = document.querySelector('.selected');
        const colorOfSelectedColor = window.getComputedStyle(selectedColor); //MDN Web DOcs utilizado.
        event.target.style.backgroundColor = colorOfSelectedColor.getPropertyValue('background-color');
      }
      
      const clickedPixel = document.querySelectorAll('.pixel');
      for (let i = 0; i < clickedPixel.length; i += 1) {
        clickedPixel[i].addEventListener('click', putColor);
      }
    }
    //6
    const colors = document.querySelectorAll('.color');
    const black = colors[0];
    const color2 = colors[1];
    const color3 = colors[2];
    const color4 = colors[3];
    black.classList.add('selected');
  
    //7 
    function getColor(event) {
      const currentSelectedColor = document.querySelector('.color.selected');
      currentSelectedColor.classList.remove('selected');
      event.target.classList.add('selected');
    }
  
    black.addEventListener('click', getColor);
    color2.addEventListener('click', getColor);
    color3.addEventListener('click', getColor);
    color4.addEventListener('click', getColor);
    
    //9 
    const clearButton = document.createElement('button');
    clearButton.id = 'clear-board';
    document.body.insertBefore(clearButton, pixelBoard);
    clearButton.innerText = 'Limpar desenho';
  
    function cleanBoard() {
      const clickedPixel = document.querySelectorAll('.pixel');
      for (let i = 0; i < clickedPixel.length; i += 1) {
        clickedPixel[i].style.backgroundColor = 'white';
      } 
    }
    clearButton.addEventListener('click', cleanBoard);
  
    //Bonus
    //10 e 8
    const boardSize = document.createElement('input');
    boardSize.id = 'board-size';
    boardSize.type = 'number';
    boardSize.placeholder = 'Número de 5 a 50!';
    boardSize.min = '1';
    document.body.insertBefore(boardSize, clearButton);
  
    const boardButton = document.createElement('button');
    boardButton.id = 'generate-board';
    boardButton.innerHTML = 'VQV'
    document.body.insertBefore(boardButton, clearButton);
  
    function changeBoardSize() {
      const inputValue = document.getElementById('board-size').value;
      if (inputValue === '') {
        alert('Board inválido!');
      } else if (inputValue < 5 && inputValue != '') {
        const pixelBoard = document.querySelectorAll('.pixel-line');
        for (let i = 0; i < pixelBoard.length; i += 1) {
          pixelBoard[i].remove();
        }
        for (let i = 0; i < 5; i += 1) {
          const pixelBoard = document.querySelectorAll('.pixel-line');
          for (let i = 0; i < pixelBoard.length; i += 1) {
            pixelBoard[i].remove();
          }
          for (let i = 0; i < 5; i += 1) {
            const pixelBoard = document.getElementById('pixel-board');
            const pixelLines = document.createElement('div');
            pixelLines.classList.add('pixel-line');
            pixelBoard.appendChild(pixelLines);
            const eachPixel = document.createElement('div');
            eachPixel.classList.add('pixel');
            pixelLines.appendChild(eachPixel);
  
            for (let i2 = 1; i2 < 5; i2 += 1) {
              const eachPixel = document.createElement('div');
              eachPixel.classList.add('pixel');
              pixelLines.appendChild(eachPixel);
            }
          }
        }
      } else if (inputValue > 50) {
        const pixelBoard = document.querySelectorAll('.pixel-line');
        for (let i = 0; i < pixelBoard.length; i += 1) {
          pixelBoard[i].remove();
        }
        for (let i = 0; i < 50; i += 1) {
          const pixelBoard = document.getElementById('pixel-board');
          const pixelLines = document.createElement('div');
          pixelLines.classList.add('pixel-line');
          pixelBoard.appendChild(pixelLines);
          const eachPixel = document.createElement('div');
          eachPixel.classList.add('pixel');
          pixelLines.appendChild(eachPixel);
  
          for (let i2 = 1; i2 < 50; i2 += 1) {
            const eachPixel = document.createElement('div');
            eachPixel.classList.add('pixel');
            pixelLines.appendChild(eachPixel);
          }
        }
      } else if (inputValue >= 5 && inputValue <= 50) {
          const pixelBoard = document.querySelectorAll('.pixel-line');
          for (let i = 0; i < pixelBoard.length; i += 1) {
            pixelBoard[i].remove();
          }
          for (let i = 0; i < inputValue; i += 1) {
            const pixelBoard = document.getElementById('pixel-board');
            const pixelLines = document.createElement('div');
            pixelLines.classList.add('pixel-line');
            pixelBoard.appendChild(pixelLines);
            const eachPixel = document.createElement('div');
            eachPixel.classList.add('pixel');
            pixelLines.appendChild(eachPixel);
  
            for (let i2 = 1; i2 < inputValue; i2 += 1) {
              const eachPixel = document.createElement('div');
              eachPixel.classList.add('pixel');
              pixelLines.appendChild(eachPixel);
            }
          }
      }
      function putColor(event) { //8
        const selectedColor = document.querySelector('.selected');
        const colorOfSelectedColor = window.getComputedStyle(selectedColor); //MDN Web DOcs utilizado.
        event.target.style.backgroundColor = colorOfSelectedColor.getPropertyValue('background-color');
      }
      
      const clickedPixel = document.querySelectorAll('.pixel');
      for (let i = 0; i < clickedPixel.length; i += 1) {
        clickedPixel[i].addEventListener('click', putColor);
      }
    }
    boardButton.addEventListener('click', changeBoardSize);
    //12
    function generateColors () { //Realizado com ajuda do https://wallacemaxters.com.br/blog/2021/02/20/como-gerar-cores-aleatorias-no-javascript
      const umAoTres = document.querySelectorAll('.color');
      for (let i = 1; i < umAoTres.length; i += 1) {
        let red = Math.ceil(Math.random()*255);
        let green = Math.ceil(Math.random()*255);
        let blue = Math.ceil(Math.random()*255);
        umAoTres[i].style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
      }
    }
    generateColors();
  }
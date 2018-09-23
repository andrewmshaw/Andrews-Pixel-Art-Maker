// Sets global variables
const $sizePicker  = document.querySelector('#sizePicker');
const $colorPicker = document.querySelector('#colorPicker');
const $canvas = document.querySelector('#pixelCanvas');

// Adds listener to select grid size
$sizePicker.addEventListener('submit', function() {
  // Prevents page refresh on submit
  event.preventDefault();

  // Gets height and width input from user and draw grid
  let width = document.querySelector('#inputWidth').value;
  let height = document.querySelector('#inputHeight').value;
  makeGrid(width, height);
});

// Draws grid based on input variables
function makeGrid(width, height) {
  $canvas.innerHTML = '';

  for (let row = 0; row < width; row++) {
    let newRow = $canvas.insertRow();

    for (let cell = 0; cell < height; cell++) {
      // Creates new colored cell with listener to change color
      let newCell = newRow.insertCell();

      newCell.onclick = changeColor;
    }
  }
}

// Change sthe color of the clicked cell to current color
function changeColor() {
  this.style.background = $colorPicker.value;
}


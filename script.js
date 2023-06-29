const rangeInput = document.getElementById('rangeInput');
const colorInput = document.getElementById('colorInput');
const bin = document.getElementById('bin');
let mouseDown = false;
document.body.onmousedown = () => mouseDown = true;
document.body.onmouseup = () => mouseDown = false;
let color = "black";

function generateGrid() {
  const grid = document.getElementById("grid");
  let gridSize = document.getElementById("rangeInput").value;
  
  // Clear existing grid
  grid.innerHTML = "";
  
  // Create grid elements
  for (let i = 0; i < gridSize * gridSize; i++) {
    const ele = document.createElement('div');
    ele.classList.add('box');
    grid.appendChild(ele);
    ele.addEventListener('mouseover', colorUpdateOver);
    ele.addEventListener('click', colorUpdateClick);
  }
  
  // Update grid CSS
  grid.style.setProperty('grid-template-columns', `repeat(${gridSize}, 1fr)`);
}


rangeInput.addEventListener('input', function() {
  const range = parseInt(this.value);
  generateGrid(range);
});

// Initial grid generation
generateGrid();

colorInput.addEventListener('input',function(){
    color = this.value.toString();
} );
bin.addEventListener('click' , function(){
    generateGrid();
});
function colorUpdateClick(e){
  const ele = e.target;
  ele.style.backgroundColor = color;
}

function colorUpdateOver(e){
   if (mouseDown){
    const ele = e.target;
    ele.style.backgroundColor = color;
   }
}

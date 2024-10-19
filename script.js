const container = document.querySelector(".container");
const changeGrid = document.querySelector("#change-grid");
const resetBtn = document.querySelector("#reset-btn");

let isDrawing = false;
let boxes;
let userGridSize = 16;

function createGrid(gridSize) {
  container.innerHTML = "";

  let containerWidth = 570;
  container.style.width = `${containerWidth}px`;

  let boxSize = containerWidth / gridSize;

  for (let i = 1; i <= gridSize ** 2; i++) {
    const itemContainer = document.createElement("div");
    const counterDiv = document.createElement("div");
    boxes = document.querySelectorAll(".box");

    let colorVal = 76;

    itemContainer.classList.add("box");

    itemContainer.style.width = `${boxSize}px`;
    itemContainer.style.height = `${boxSize}px`;

    itemContainer.addEventListener("mousedown", () => {
      isDrawing = true;
      if (colorVal > 0) {
        colorVal -= 5;
        itemContainer.style.backgroundColor = `rgb(${colorVal}, ${colorVal}, ${colorVal})`;
      }
    });

    itemContainer.addEventListener("mousemove", () => {
      if (isDrawing && colorVal > 0) {
        colorVal -= 5;
        itemContainer.style.backgroundColor = `rgb(${colorVal}, ${colorVal}, ${colorVal})`;
      }
    });

    itemContainer.addEventListener("mouseup", () => {
      isDrawing = false;
    });

    container.appendChild(itemContainer);
    itemContainer.appendChild(counterDiv);

    boxes = document.querySelectorAll(".box");
  }

  document.addEventListener("mouseup", () => {
    isDrawing = false;
  });
}

function updateGrid() {

  do {
    userGridSize = parseInt(
      prompt("Enter grid size (e.g., 8 for 8x8 grid, limit to 100 only):")
    );
  } while (isNaN(userGridSize) || userGridSize <= 0 || userGridSize > 100);

  createGrid(userGridSize);
}

changeGrid.addEventListener("click", () => {
  updateGrid();
});

resetBtn.addEventListener("click", () => {
  boxes.forEach(x => x.style.backgroundColor = "white");
  createGrid(userGridSize);
});

createGrid(userGridSize);

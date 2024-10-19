const container = document.querySelector(".container");
const changeGrid = document.querySelector("#change-grid");

let isDrawing = false;

function createGrid(gridSize) {
  container.innerHTML = "";

  let boxes;

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
        colorVal -= 10;
        itemContainer.style.backgroundColor = `rgb(${colorVal}, ${colorVal}, ${colorVal})`;
      }
    });

    itemContainer.addEventListener("mousemove", () => {
      if (isDrawing && colorVal > 0) {
        colorVal -= 10;
        itemContainer.style.backgroundColor = `rgb(${colorVal}, ${colorVal}, ${colorVal})`;
      }
    });

    itemContainer.addEventListener("mouseup", () => {
      isDrawing = false;
    });

    container.appendChild(itemContainer);
    itemContainer.appendChild(counterDiv);
  }

  document.addEventListener("mouseup", () => {
    isDrawing = false;
  });
}

function updateGrid() {
  let userGridSize;

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

createGrid(8);

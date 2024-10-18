const container = document.querySelector(".container");
const changeGrid = document.querySelector("#change-grid");

let isDrawing = false;

function createGrid(gridSize) {
  container.innerHTML = "";

  let boxes;

  let containerWidth = 840;
  container.style.width = `${containerWidth}px`;

  let boxSize = containerWidth / gridSize;

  for (let i = 1; i <= gridSize ** 2; i++) {
    const itemContainer = document.createElement("div");
    const counterDiv = document.createElement("div");
    boxes = document.querySelectorAll(".box");

    itemContainer.classList.add("box");

    itemContainer.style.width = `${boxSize}px`;
    itemContainer.style.height = `${boxSize}px`;

    itemContainer.addEventListener("mousedown", () => {
      isDrawing = true;
      itemContainer.style.backgroundColor = "black";
    });

    itemContainer.addEventListener("mousemove", () => {
      if (isDrawing) {
        itemContainer.style.backgroundColor = "black";
      }
    });

    itemContainer.addEventListener("mouseup", () => {
      isDrawing = false;
    });

    container.appendChild(itemContainer);
    itemContainer.appendChild(counterDiv);
  }
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

createGrid(16);

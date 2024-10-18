const container = document.querySelector(".container");
const changeGrid = document.querySelector("#change-grid");

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

    container.appendChild(itemContainer);
    itemContainer.appendChild(counterDiv);
  }

  boxes.forEach((box) =>
    box.addEventListener("mouseover", (e) => {
      box.style.backgroundColor = "black";
    })
  );
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

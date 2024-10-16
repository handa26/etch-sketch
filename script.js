const container = document.querySelector(".container");
let boxes;

for (let i = 1; i <= 256; i++) {
  const itemContainer = document.createElement("div");
  const counterDiv = document.createElement("div");
  boxes = document.querySelectorAll(".box");

  itemContainer.classList.add("box");
  counterDiv.innerHTML = i;

  container.appendChild(itemContainer);
  itemContainer.appendChild(counterDiv);
}

boxes.forEach((box) => box.addEventListener("mouseover", (e) => {
  box.style.backgroundColor = "black"
}));

const container = document.querySelector(".container");


for (let i = 1; i <= 256; i++) {
  const itemContainer = document.createElement("div");
  const counterDiv = document.createElement("div");

  itemContainer.classList.add("box");
  counterDiv.innerHTML = i;

  container.appendChild(itemContainer);
  itemContainer.appendChild(counterDiv);
}
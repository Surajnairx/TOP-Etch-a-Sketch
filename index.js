const container = document.querySelector(".container");
const padDimension = document.querySelector("#btn-range");
const colorSelect = document.querySelector("#btn-color");
const colorRandom = document.querySelector("#btn-random");
const iniColor = "#000000";

document.onload = sketchPad(3);

function sketchPad(dimension) {
  removeGrid();
  let line, item;
  for (let i = 0; i < dimension; i++) {
    line = document.createElement("div");
    line.setAttribute("class", "line");
    for (let j = 0; j < dimension; j++) {
      item = document.createElement("div");
      item.setAttribute("class", "item");
      line.appendChild(item);
    }
    container.appendChild(line);
  }
  updateColor();
  document.querySelector("#color").value = "#000000";
}
function updateColor(color = "#000000") {
  items = document.querySelectorAll(".line > .item");
  items.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      item.style.backgroundColor = color;
    });
  });
}

padDimension.addEventListener("click", () => {
  const dimension = document.querySelector("#dimension").value;
  sketchPad(dimension);
});

colorSelect.addEventListener("click", () => {
  const color = document.querySelector("#color").value;
  updateColor(color);
  color.value = iniColor;
});

function removeGrid() {
  const line = document.querySelectorAll(".line");
  if (line.length > 0) {
    line.forEach((l) => {
      container.removeChild(l);
    });
  }
}

function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
colorRandom.addEventListener("click", () => {
  let color = getRandomColor();
  updateColor(color);
  document.querySelector("#color").value = color;
});

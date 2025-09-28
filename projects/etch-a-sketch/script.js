let gridContainer = document.getElementById("gridContainer");

// Create divs in container so we can have a 16x16 grid.
function createGrid(size) {
  for (let i = 1; i <= size; i++) {
    let column = document.createElement("div");
    column.className = "column";
    column.id = `column${i}`;
    // add hover to draw for columns
    column.onmouseover = () => {
      column.style.backgroundColor = "black";
    };
    gridContainer.appendChild(column);
    for (let j = 1; j <= size; j++) {
      let row = document.createElement("div");
      row.className = "row";
      row.id = `row${j}`;
      // add hover to draw for rows
      row.onmouseover = () => {
        row.style.backgroundColor = "black";
      };
      column.appendChild(row);
    }
  }
}

// Load the initial grid
createGrid(16);

const resizeButton = document.getElementById("resizeButton");

function deleteGrid() {
  // Clears the innerHTML which deletes every single row and column, effectively deleting the entirety of the grid.
  gridContainer.innerHTML = "";
}

resizeButton.onclick = () => {
  // the max size is 100 so it isn't too big that it'll freeze or cause size issues
  let size = prompt("Enter a size (MAX 100): ");
  while (size > 100) {
    size = prompt("Enter a size (MAX 100): ");
  }
  deleteGrid();
  createGrid(size);
};

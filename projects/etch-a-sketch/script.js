const gridContainer = document.getElementById("gridContainer");

// Create divs in container so we can have a 16x16 grid.
for (let i = 1; i <= 16; i++) {
  let column = document.createElement("div");
  column.className = "column";
  column.id = `column${i}`;
  // add hover to draw for columns
  column.onmouseover = () => {
    column.style.backgroundColor = "black";
  };
  gridContainer.appendChild(column);
  for (let j = 1; j <= 16; j++) {
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

let table = document.createElement("table");
table.style.border = "1px solid black"
table.setAttribute("cellspacing", "10px");
table.setAttribute("cellpadding", "10px");

let n = 3, m = 4;

for (let i = 0; i < n; i++) {
  let row = document.createElement("tr");

  for (let j = 0; j < m; j++) {
    let cell = document.createElement("td");
    cell.innerText = i * m + j;

    row.appendChild(cell);
  }

  table.appendChild(row);
}

document.body.appendChild(table);

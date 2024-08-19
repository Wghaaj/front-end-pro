function createTable(size) {
  let table = document.createElement('table')

  for(let i = 1; i <=size; i++) {
    let row = document.createElement('tr')

    for(let a = 1; a <=size; a++) {
      let cell = document.createElement('td')
      cell.textContent = i * a;
      row.appendChild(cell)
    }
    table.appendChild(row)
  }

  document.getElementById('multTable').appendChild(table)
}

createTable(10)
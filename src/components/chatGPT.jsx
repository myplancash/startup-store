const Table = () => {
  
function getTableSum(tableId, number, type) {
  const table = document.getElementById(tableId);
  let sum = 0;

  if (table) {
    const rows = table.rows;

    if (type === 'column') {
      for (let i = 0; i < rows.length; i++) {
        const cell = rows[i].cells[number - 1]; // Adjust number to zero-based index
        const value = parseFloat(cell.innerText);
        if (!isNaN(value)) {
          sum += value;
        }
      }
    } else if (type === 'row') {
      const cells = rows[number - 1].cells; // Adjust number to zero-based index
      for (let j = 0; j < cells.length; j++) {
        const value = parseFloat(cells[j].innerText);
        if (!isNaN(value)) {
          sum += value;
        }
      }
    }
  }

  return sum;
}

  return(
    <table id="myTable">
      <tbody>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
        </tr>
        <tr>
          <td>4</td>
          <td>5</td>
          <td>6</td>
        </tr>
        <tr>
          <td>7</td>
          <td>8</td>
          <td>9</td>
        </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>
            {`Total: ${getTableSum('myTable', 2, 'column')} `}
            </td>
          </tr>
        </tfoot>
    </table>
  )
}


export default Table;
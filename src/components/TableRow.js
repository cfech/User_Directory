import React from "react";
import "../styles/tableRow.css"

function TableRow(props) {
  return (

    <div>
      <tr className="IndRow">
        <td>image</td>
        <td>{props.name}</td>
        <td>(908)2020463</td>
        <td>email@email.com</td>
        <td>12/31/1996</td>
      </tr>
      <hr></hr></div>
  )
}

export default TableRow;

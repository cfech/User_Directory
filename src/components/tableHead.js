import React from "react";
import "../styles/tableHead.css"

function TableHead() {
  return (
<div className = "row tableHeadDiv">
<table>
  <tr>
    <th>Image</th>
    <th>Name</th>
    <th>Phone</th>
    <th>Email</th>
    <th>DOB</th>

  </tr>
</table>
</div>
  )
}

export default TableHead;

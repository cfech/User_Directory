import React from "react";
import "../styles/table.css"

import User from "../user.json"
import API from "./API"


class Table extends React.Component {

  state = {
    User: User,
    sortOder: "",
    results: []
  }


  

  sortByName = () => {
    let sortedEmployees = this.state.User.sort((a, b) => {
      if (b.name > a.name) {
        return -1
      }
      if (a.name > b.name) {
        return 1
      }

      return 0;
    });

    if (this.state.sortOrder === "DESC") {
      sortedEmployees.reverse();
      this.setState({ sortOder: "ASC" });
    } else {
      this.setState({ sortOder: "DESC" });
    }


    console.log(sortedEmployees)
    this.setState({ User: sortedEmployees })
  }  
  
 
     

  render() {

   API.ApiSearch()
    
    // let res
    // API.ApiSearch(res).then(
    //   console.log(res)
    // )  

      return (

      <div className="row tableHeadDiv">
        <table>
          <thead>
            <tr>
            <th>Image</th>
            <th>Name <span className=" downArrow" onClick={this.sortByName}></span></th>
            <th>Phone</th>
            <th>Email</th>
            <th>DOB</th>
            </tr>
          </thead>


          {this.state.User.map(item =>
            <tbody key={item.id}>
              <tr>
              <td >{item.image} </td>
              <td > {item.name} </td>
              <td >{item.Phone} </td>
              <td >{item.email}</td>
              <td >{item.DOB}</td>
              </tr>
            </tbody>
          )}

        </table>


        </div>
    )
  }
}

export default Table;

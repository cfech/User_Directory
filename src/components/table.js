//Imports
import React from "react";
import "../styles/table.css"
import User from "../user.json"
import API from "./API"

//Table class
class Table extends React.Component {

  //States
  state = {
    User: User,
    sortOder: "",
    result: []
  }




  // searchPeople = query => {
  //   let url = 'https://randomuser.me/api/?results=50'
  //   console.log(url)
  //   axios.get(url)
  //     .then(res => {
  //       console.log(res.data.results)

  //       return res
  //     })
  // };


  // searchGiphy = query => {
  //   API.search(query)
  //     .then(res => this.setState({ results: res.data.results }))
  //     .catch(err => console.log(err));
  //     console.log(this.state.result)
  // };



  //name sort function
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



//Render items on the page
  render() {

    API.ApiSearch()

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
                <td ><img src={item.image} alt="" /></td>
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

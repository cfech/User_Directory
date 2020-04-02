//Imports
import React from "react";
import "../styles/search.css"

//search box function
function Search(props) {
    
 



return(
<div className= "Search row">
{/* <input type = "text" name = "search" placeholder="Search" id = "inputBox"  value ={this.state.search} onChange={this.handleInputChange}/> */}

<input type = "text" name = "search" placeholder="Search" id = "inputBox" onChange={props.handleInputChange}></input>
</div>
)}

export default Search;

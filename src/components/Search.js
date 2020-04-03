//Imports
import React from "react";
import "../styles/search.css"

//search box function
function Search(props) {
    return (
        <div className="Search row">
            <input type="text" name="search" placeholder="Search" id="inputBox" value={props.search} onChange={props.handleInputChange} ></input>
        </div>
    )
}

//Exporting search component
export default Search;

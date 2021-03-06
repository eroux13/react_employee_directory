// Import React
import React from "react";
// Import Stylesheet
import "./Searchbar.css";

function Searchbar(props){
    return (
        <form className="col-lg-12">
            <input 
                className="inputField"
                value={props.search}
                name="search"
                type="text"
                placeholder="Search Employees"
                onChange={props.handleInputChange}
            />
            <button className="btn btn-primary search" onClick={props.handleFormSubmit}>Search</button>
        </form>
    )
}

export default Searchbar;
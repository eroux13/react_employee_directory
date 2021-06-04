// Import React
import React from "react";

function Employee(props){
    return (
        <tr>
            <td><img src={props.profilePic} alt={props.firstName + " " + props.lastName}></img></td>
            <td>{props.firstName}</td>
            <td>{props.lastName}</td>
            <td>{props.phone}</td>
            <td>{props.email}</td>
            <td>{props.age}</td>
        </tr>
    )
}

export default Employee;
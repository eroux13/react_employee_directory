// Import React
import React, {Component} from "react";
// Import stylesheet
import "./EmployeeContainer.css";
// Import Header Component
import Header from "../Header/Header";
// Import Searchbar Component
import Searchbar from "../Searchbar/Searchbar";
// Import Employee Component
import Employee from "../Employee/Employee";
// Import Table Component from react
import {Table} from "react-bootstrap";
// Import API call
import API from "../../utils/API";
// Import Button Component from react bootstrap
import {Button} from 'react-bootstrap';
// Import Icons from FontAwesome to sort names
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortAlphaDown } from '@fortawesome/free-solid-svg-icons';
import { faSortNumericDown } from '@fortawesome/free-solid-svg-icons';

class EmployeeContainer extends Component {
    state = {
        employeeList: [],
        search: "",
        filteredList: []
    };

    componentDidMount() {
        // Use API Call to get employee data
        API.getUsers()
            .then(employeeData => this.setState({
                employeeList: employeeData.data.results,
                filteredList: employeeData.data.results
            }))
            .catch(err => console.log(err))
    };

    handleInputChange = (event) => {
        // Retrieve value and name of the input which triggered the change
        const { name, value } = event.target;
        // Update input's state
        this.setState({
            [name]: value.toLowerCase()
        });
    };

    handleFormSubmit = (event) => {
        // Prevent page from reloading or else we'll lose data
        event.preventDefault();
        // Filter through employee list in state and set filtered list to search results
        const filteredEmployees = this.state.employeeList.filter(
            (employee) => employee.name.first.toLowerCase().includes(this.state.search)
            || employee.name.last.toLowerCase().includes(this.state.search)
            || employee.email.toLowerCase().includes(this.state.search)
        );
        this.setState({
          search: "",
          filteredList: filteredEmployees
        });
    };

    sortFirst = (event) => {
        event.preventDefault();
        let results = this.state.employeeList.sort((a, b) => {
            let nameA = a.name.first.toLowerCase();
            let nameB = b.name.first.toLowerCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        });
        this.setState({
            filteredList: results
        });
    };

    sortLast = (event) => {
        event.preventDefault();
        let results = this.state.employeeList.sort((a, b) => {
            let nameA = a.name.last.toLowerCase();
            let nameB = b.name.last.toLowerCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        });
        this.setState({
            filteredList: results
        });
    };

    sortAge = (event) => {
        event.preventDefault();
        let results = this.state.employeeList.sort((a, b) => {
            let ageA = parseInt(a.dob.age);
            let ageB = parseInt(b.dob.age);
            if (ageA < ageB) {
                return -1;
            }
            if (ageA > ageB) {
                return 1;
            }
            return 0;
        });
        this.setState({
            filteredList: results
        });
    };

    render() {
        return (
            <div className="main">
                <Header />
                <Searchbar 
                    search = {this.search}
                    handleFormSubmit = {this.handleFormSubmit}
                    handleInputChange = {this.handleInputChange}
                />
                <Button variant="warning" className="clearBtn" onClick={() => this.setState({ filteredList: this.state.employeeList })}>Clear Search</Button>
                <Table striped bordered hover variant="dark" responsive="sm">
                    <thead>
                        <tr>
                            <th>Profile Pic</th>
                            <th>First Name  <FontAwesomeIcon icon={faSortAlphaDown} onClick={this.sortFirst} /></th>
                            <th>Last Name  <FontAwesomeIcon icon={faSortAlphaDown} onClick={this.sortLast} /></th>
                            <th>Phone Number</th>
                            <th>Email</th>
                            <th>Age  <FontAwesomeIcon icon={faSortNumericDown} onClick={this.sortAge} /></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.filteredList.map((employee) => (
                        <Employee
                            profilePic={employee.picture.thumbnail}
                            firstName={employee.name.first}
                            lastName={employee.name.last}
                            phone={employee.phone}
                            email={employee.email}
                            age={employee.dob.age}
                            key={employee.name.first + employee.dob.age}
                        />
                        ))}
                    </tbody>
                </Table>
            </div>
        )
    }
};

export default EmployeeContainer;
// hello
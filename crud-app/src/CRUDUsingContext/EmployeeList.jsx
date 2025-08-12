import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import "./crudStyle.css";
import { useNavigate } from "react-router-dom";
import { EmployeeContext } from "./EmployeeStore";
// import position from './../../node_modules/dom-helpers/esm/position';

const EmployeeList = () => {
  let navigate = useNavigate();
  const { employee, deleteEmployee } = useContext(EmployeeContext);

  return (
    <>
      <div className="employeeList">
        <div className="addEmployeeHeading">
          <h3>EmployeeList</h3>
          <hr />
        </div>
        <div className="addEmployeeBtn">
          <Button variant="primary" onClick={() => navigate("/addEmployee")}>
            Add Employee
          </Button>
        </div>
        <div className="employeeTable">
          {employee.length === 0 ? (
            <h5>No employees found.</h5>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>id</th>
                  <th>Employee ID</th>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Company</th>
                  <th>Salary</th>
                  <th>Update Data</th>
                  <th>Remove Data</th>
                </tr>
              </thead>
              <tbody>
                {employee.map((emp, index) => (
                  <tr key={index}>
                    <td>{emp.id}</td>
                    <td>{emp.empId}</td>
                    <td>{emp.name}</td>
                    <td>{emp.position}</td>
                    <td>{emp.company}</td>
                    <td>{emp.salary}</td>
                    <td>
                      <Button
                        variant="primary"
                        onClick={() => navigate(`/EditEmployee/${emp.id}`)}
                      >
                        Edit
                      </Button>
                    </td>
                    <td>
                      <Button
                        variant="danger"
                        onClick={() => deleteEmployee(emp.id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
      <div className="backBtn">
        <Button variant="primary" onClick={() => navigate("/")}>
          Back To HomePage
        </Button>
      </div>
    </>
  );
};

export default EmployeeList;

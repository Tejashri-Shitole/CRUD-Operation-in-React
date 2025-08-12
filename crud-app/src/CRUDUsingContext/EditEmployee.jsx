import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { EmployeeContext } from "./EmployeeStore";
import { useNavigate } from "react-router-dom";

const EditEmployee = () => {
  const { id } = useParams();
  console.log(id);

  const [validated, setValidated] = useState(false);

  const [empFormData, setEmpFormData] = useState({
    empId: "",
    name: "",
    position: "",
    company: "",
    salary: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmpFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const { employee, updateEmployee } = useContext(EmployeeContext);
  const navigate = useNavigate();

  useEffect(() => {
    const emp = employee.find((emp) => emp.id === parseInt(id));
    if (emp) {
      setEmpFormData({ ...emp });
    }
  }, [id, employee]);

  const handleUpdate = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    const employee = { id: parseInt(id), ...empFormData };
    console.log("Employee Data:", employee);

    updateEmployee(parseInt(id), employee);
    navigate("/employees");
    event.preventDefault();
    setValidated(true);
  };
  return (
    <>
      <div className="addEmployeeHeading">
        <h3>EditEmployee</h3>
      </div>

      <Form
        noValidate
        validated={validated}
        onSubmit={handleUpdate}
        className="employeeForm"
      >
        <Row className="mb-2">
          <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Label>Employee ID</Form.Label>
            <Form.Control
              required
              type="text"
              name="empId"
              placeholder="Employee ID"
              value={empFormData.empId}
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid ID.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom02">
            <Form.Label>Employee name</Form.Label>
            <Form.Control
              required
              type="text"
              name="name"
              placeholder="Employee name"
              value={empFormData.name}
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid name.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-2">
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>Position</Form.Label>
            <Form.Control
              type="text"
              name="position"
              placeholder="Position"
              required
              value={empFormData.position}
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid data.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom04">
            <Form.Label>Company</Form.Label>
            <Form.Control
              type="text"
              name="company"
              placeholder="Company"
              required
              value={empFormData.company}
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid company.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-2">
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>Salary</Form.Label>
            <Form.Control
              type="text"
              name="salary"
              placeholder="Salary"
              required
              value={empFormData.salary}
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Form.Group className="mb-3">
          <Form.Check
            required
            label="Do you want to update the changes?"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group>
        <Button type="submit">Update data</Button>
      </Form>
    </>
  );
};
export default EditEmployee;

import React from "react";
import { Button, Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Employee Management System</h1>
      <Row className="justify-content-center">
        <Col md={4} className="mb-3">
          <Card className="text-center shadow">
            <Card.Body>
              <Card.Title>View Employee List</Card.Title>
              <Card.Text>
                See all employees currently stored in the system.
              </Card.Text>
              <Button variant="primary" onClick={() => navigate("/employees")}>
                View Employees
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mb-3">
          <Card className="text-center shadow">
            <Card.Body>
              <Card.Title>Add New Employee</Card.Title>
              <Card.Text>
                Add a new employee's details into the system.
              </Card.Text>
              <Button
                variant="success"
                onClick={() => navigate("/addEmployee")}
              >
                Add Employee
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;

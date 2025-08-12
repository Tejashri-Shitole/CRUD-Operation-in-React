import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={4} sm={12} className="mb-3">
            <h5>Employee Management</h5>
            <p style={{ fontSize: "14px" }}>
              Manage employees efficiently with our simple and powerful
              application.
            </p>
          </Col>

          <Col md={4} sm={12} className="mb-3">
            <h5>Quick Links</h5>
            <ul style={{ listStyle: "none", padding: 0, fontSize: "14px" }}>
              <li>
                <a href="/" style={{ color: "white", textDecoration: "none" }}>
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/employees"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Employee List
                </a>
              </li>
              <li>
                <a
                  href="/addEmployee"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Add Employee
                </a>
              </li>
            </ul>
          </Col>

          <Col md={4} sm={12}>
            <h5>Contact</h5>
            <p style={{ fontSize: "14px" }}>
              <FaMapMarkerAlt /> Pune, India <br />
              <FaPhone /> +91 98765 43210 <br />
              <FaEnvelope /> support@employeems.com
            </p>
          </Col>
        </Row>
        <hr style={{ borderColor: "rgba(255,255,255,0.3)" }} />
        <p className="text-center" style={{ fontSize: "13px" }}>
          © {new Date().getFullYear()} Employee Management System. All Rights
          Reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;

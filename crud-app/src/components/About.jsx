import React from "react";
import { FaBriefcase, FaBolt, FaLock } from "react-icons/fa";

const About = () => {
  return (
    <div className="about-container">
      <h1>About Our Company</h1>
      <p>
        Welcome to <strong>Employee Management System</strong> — a simple and
        powerful platform designed to help businesses manage their workforce
        with ease.
      </p>
      <p>
        Our goal is to simplify employee record keeping, tracking, and updating
        while maintaining a user-friendly interface for HR professionals and
        managers.
      </p>

      <div className="about-highlights">
        <div>
          <h3>
            <FaBriefcase color="#8b4820" /> Easy Management
          </h3>
          <p>View, add, edit, and delete employee details instantly.</p>
        </div>
        <div>
          <h3>
            <FaBolt color="#fbc02d" /> Fast Performance
          </h3>
          <p>Built with React for a smooth and quick experience.</p>
        </div>
        <div>
          <h3>
            <FaLock color="#c76428" /> Secure Data
          </h3>
          <p>Your employee information is safe and private.</p>
        </div>
      </div>
    </div>
  );
};

export default About;

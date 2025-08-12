import React from "react";
import { Routes, Route } from "react-router-dom";
import EmployeeList from "./EmployeeList";
import AddEmployee from "./AddEmployee";
import EditEmployee from "./EditEmployee";
import EmployeeStore from "./EmployeeStore";
import Navbar from "../components/Navbar";
import HomePage from "../components/Home";
import Footer from "../components/Footer";
import About from "../components/About";
import Contact from "../components/ContactUs";

const CRUDMain = () => {
  return (
    <>
      <div className="crud-app-container">
        <Navbar />

        <EmployeeStore>
          <div className="content-wrap">
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
              <Route path="/employees" element={<EmployeeList />}></Route>
              <Route
                exact
                path="/addEmployee"
                element={<AddEmployee />}
              ></Route>
              <Route
                exact
                path="/editEmployee/:id"
                element={<EditEmployee />}
              ></Route>
            </Routes>
          </div>
          <Footer />
        </EmployeeStore>
      </div>
    </>
  );
};

export default CRUDMain;

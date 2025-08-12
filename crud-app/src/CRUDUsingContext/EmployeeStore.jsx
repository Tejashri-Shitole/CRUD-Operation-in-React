import React, { createContext, useState } from "react";

export const EmployeeContext = createContext();

const EmployeeStore = ({ children }) => {
  const [employee, setEmployee] = useState([]);

  const addEmployee = (employeeVal) => {
    setEmployee((prev) => [...prev, employeeVal]);
  };

  const updateEmployee = (id, updatedEmp) => {
    setEmployee((prev) =>
      prev.map((emp) => (emp.id === id ? { ...updatedEmp } : emp))
    );
  };

  const deleteEmployee = (id) => {
    setEmployee((prevEmployees) =>
      prevEmployees.filter((emp) => emp.id !== id)
    );
  };

  return (
    <EmployeeContext.Provider
      value={{ employee, addEmployee, updateEmployee, deleteEmployee }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};

export default EmployeeStore;

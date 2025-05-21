import React from "react";

function EmployeeDropdown() {
  const employees = [
    { id: 1, name: "Anna", department: "HR", age: 50 },
    { id: 2, name: "Brian", department: "IT", age: 40 },
    { id: 3, name: "Clara", department: "Finance", age: 19 },
    { id: 4, name: "Ann", department: "Finance", age: 22 },
    { id: 5, name: "Elisabeth", department: "HR", age: 16 }
  ];

  return (
    <div>
      <h1>Employee Dropdown</h1>
      <select>
        {employees.map((employee) => (
          <option key={employee.id} value={employee.name}>
            {employee.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default EmployeeDropdown;

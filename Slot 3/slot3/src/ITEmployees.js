import React from "react";

function ITEmployees() {
  const employees = [
    { id: 1, name: "Anna", department: "HR", age: 50 },
    { id: 2, name: "Brian", department: "IT", age: 40 },
    { id: 3, name: "Clara", department: "Finance", age: 19 },
    { id: 4, name: "Ann", department: "Finance", age: 22 },
    { id: 5, name: "Elisabeth", department: "HR", age: 16 }
  ];

  // Lọc nhân viên phòng IT
  const itEmployees = employees.filter(employee => employee.department === "IT");

  return (
    <div>
      <h1>IT Department Employees</h1>
      <ul>
        {itEmployees.map(employee => (
          <li key={employee.id}>{employee.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ITEmployees;

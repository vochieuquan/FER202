import React from "react";

function GroupedEmployees() {
  const employees = [
    { id: 1, name: "Anna", department: "HR", age: 50 },
    { id: 2, name: "Brian", department: "IT", age: 40 },
    { id: 3, name: "Clara", department: "Finance", age: 19 },
    { id: 4, name: "Ann", department: "Finance", age: 22 },
    { id: 5, name: "Elisabeth", department: "HR", age: 16 }
  ];

  // Nhóm nhân viên theo department
  const grouped = employees.reduce((acc, employee) => {
    const dept = employee.department;
    if (!acc[dept]) {
      acc[dept] = [];
    }
    acc[dept].push(employee);
    return acc;
  }, {});

  return (
    <div>
      <h1>Employees Grouped by Department</h1>
      {Object.keys(grouped).map(dept => (
        <div key={dept}>
          <h3>{dept}</h3>
          <ul>
            {grouped[dept].map(employee => (
              <li key={employee.id}>{employee.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default GroupedEmployees;

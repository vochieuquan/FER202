import React from "react";

import ReactDOM from "react-dom/client";

function SortedEmployees() {
  const employees = [
    { id: 1, name: "Anna", department: "HR", age: 50 },
    { id: 2, name: "Brian", department: "IT", age: 40 },
    { id: 3, name: "Clara", department: "Finance", age: 19 },
    { id: 4, name: "Ann", department: "Finance", age: 22 },
    { id: 5, name: "Elisabeth", department: "HR", age: 16 }
  ];

  const sortedEmployees = [...employees].sort((a, b) => {
    const deptCompare = a.department.localeCompare(b.department);
    if (deptCompare !== 0) {
      return deptCompare;
    }
    return a.name.localeCompare(b.name);
  });

  return (
    <div>
      <h1>Sorted Employee List</h1>
      <ul>
        {sortedEmployees.map(employee => (
          <li key={employee.id}>
            {employee.name} - {employee.department}
          </li>
        ))}
      </ul>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SortedEmployees />
  </React.StrictMode>
);


export default SortedEmployees;

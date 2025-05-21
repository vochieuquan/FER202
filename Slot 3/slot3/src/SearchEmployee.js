import React, { useState } from "react";

function SearchEmployee() {
  const employees = [
    { id: 1, name: "Anna", department: "HR", age: 50 },
    { id: 2, name: "Brian", department: "IT", age: 40 },
    { id: 3, name: "Clara", department: "Finance", age: 19 },
    { id: 4, name: "Ann", department: "Finance", age: 22 },
    { id: 5, name: "Elisabeth", department: "HR", age: 16 }
  ];

  const [searchTerm, setSearchTerm] = useState("");

  // Lọc nhân viên theo tên (không phân biệt hoa thường)
  const filteredEmployees = employees.filter(employee =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Search Employees</h1>
      <input
        type="text"
        placeholder="Type employee name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <ul>
        {filteredEmployees.length > 0 ? (
          filteredEmployees.map(employee => (
            <li key={employee.id}>
              {employee.name} - {employee.department}
            </li>
          ))
        ) : (
          <li>No employees found</li>
        )}
      </ul>
    </div>
  );
}

export default SearchEmployee;

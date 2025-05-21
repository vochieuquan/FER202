import React from "react";

function CheckTeenager() {
  const employees = [
    { id: 1, name: "Anna", department: "HR", age: 50 },
    { id: 2, name: "Brian", department: "IT", age: 40 },
    { id: 3, name: "Clara", department: "Finance", age: 19 },
    { id: 4, name: "Ann", department: "Finance", age: 22 },
    { id: 5, name: "Elisabeth", department: "HR", age: 16 }
  ];

  const isTeenager = employees.some(e => e.age >= 10 && e.age <= 20);

  return (
    <div>
      <h1>Is any employee a teenager?</h1>
      <p>{isTeenager ? "True" : "False"}</p>
    </div>
  );
}

export default CheckTeenager;

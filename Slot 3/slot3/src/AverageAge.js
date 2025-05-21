import React from "react";

const averageAge = (...ages) => {
  if (ages.length === 0) return 0;
  const sum = ages.reduce((acc, age) => acc + age, 0);
  return sum / ages.length;
};

function AverageAge() {
  const avg = averageAge(30, 50, 40, 19, 22, 16);

  return (
    <div>
      <h1>Average Age</h1>
      <p>The average age is: {avg.toFixed(2)}</p>
    </div>
  );
}

export default AverageAge;

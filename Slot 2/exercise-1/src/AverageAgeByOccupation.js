function AverageAgeByOccupation() {
  const people = [
    { name: "Alice", age: 22, occupation: "Designer" },
    { name: "Bob", age: 25, occupation: "Engineer" },
    { name: "Charlie", age: 23, occupation: "Designer" },
    { name: "David", age: 30, occupation: "Engineer" },
    { name: "Eva", age: 20, occupation: "Student" }
  ];

  // Nhóm theo nghề nghiệp
  const grouped = people.reduce((acc, person) => {
    const occ = person.occupation;
    if (!acc[occ]) {
      acc[occ] = [];
    }
    acc[occ].push(person.age);
    return acc;
  }, {});

  // Tính tuổi trung bình
  const averageAges = Object.entries(grouped).map(([occupation, ages]) => {
    const total = ages.reduce((sum, age) => sum + age, 0);
    const avg = total / ages.length;
    return { occupation, averageAge: avg.toFixed(2) };
  });

  return (
    <div>
      <h2>Average Age by Occupation</h2>
      <ul>
        {averageAges.map((item, index) => (
          <li key={index}>
            {item.occupation}: {item.averageAge} years
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AverageAgeByOccupation;

function GroupByOccupation() {
  const people = [
    { name: "Alice", age: 22, occupation: "Designer" },
    { name: "Bob", age: 25, occupation: "Engineer" },
    { name: "Charlie", age: 23, occupation: "Designer" },
    { name: "David", age: 30, occupation: "Engineer" },
    { name: "Eva", age: 20, occupation: "Student" }
  ];

  // Nhóm theo nghề
  const grouped = people.reduce((acc, person) => {
    const occ = person.occupation;
    if (!acc[occ]) {
      acc[occ] = [];
    }
    acc[occ].push(person);
    return acc;
  }, {});

  return (
    <div>
      <h2>People Grouped by Occupation</h2>
      {Object.entries(grouped).map(([occupation, people]) => (
        <div key={occupation}>
          <h3>{occupation}</h3>
          <ul>
            {people.map((person, index) => (
              <li key={index}>
                Name: {person.name}, Age: {person.age}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default GroupByOccupation;

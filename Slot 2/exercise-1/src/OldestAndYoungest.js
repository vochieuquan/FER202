function OldestAndYoungest() {
  const people = [
    { name: "Alice", age: 22, occupation: "Designer" },
    { name: "Bob", age: 25, occupation: "Engineer" },
    { name: "Charlie", age: 23, occupation: "Designer" },
    { name: "David", age: 30, occupation: "Engineer" },
    { name: "Eva", age: 20, occupation: "Student" }
  ];

  const oldest = people.reduce((max, person) => (person.age > max.age ? person : max), people[0]);
  const youngest = people.reduce((min, person) => (person.age < min.age ? person : min), people[0]);

  return (
    <div>
      <h2>Oldest and Youngest Person</h2>
      <p>Oldest: {oldest.name} ({oldest.age} years old)</p>
      <p>Youngest: {youngest.name} ({youngest.age} years old)</p>
    </div>
  );
}

export default OldestAndYoungest;

function PeopleList() {
  const people = [
    { name: "Alice", age: 20, occupation: "Student" },
    { name: "Bob", age: 30, occupation: "Engineer" },
    { name: "Charlie", age: 25, occupation: "Designer" }
  ];

  return (
    <div>
      <h2>People List</h2>
      <ul>
        {people.map((person, index) => (
          <li key={index}>
            Name: {person.name}, Age: {person.age}, Occupation: {person.occupation}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PeopleList;

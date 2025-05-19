function AreAllTeenagers() {
  const people = [
    { name: "Anna", age: 14, occupation: "Student" },
    { name: "Ben", age: 17, occupation: "Student" },
    { name: "Clara", age: 19, occupation: "Student" }
  ];

  const allAreTeenagers = people.every(person => person.age >= 13 && person.age <= 19);

  return (
    <div>
      <h2>Are All Teenagers?</h2>
      <p>{allAreTeenagers ? "Yes, all are teenagers." : "No, not everyone is a teenager."}</p>
    </div>
  );
}

export default AreAllTeenagers;

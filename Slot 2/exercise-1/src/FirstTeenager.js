function FirstTeenager() {
  const people = [
    { name: "Alice", age: 20, occupation: "Student" },
    { name: "Bob", age: 17, occupation: "High School Student" },
    { name: "Charlie", age: 25, occupation: "Designer" },
    { name: "Diana", age: 15, occupation: "Student" }
  ];

  const firstTeenager = people.find(person => person.age >= 13 && person.age <= 19);

  return (
    <div>
      <h2>First Teenager</h2>
      {firstTeenager ? (
        <p>
          Name: {firstTeenager.name}, Age: {firstTeenager.age}, Occupation: {firstTeenager.occupation}
        </p>
      ) : (
        <p>No teenager found.</p>
      )}
    </div>
  );
}

export default FirstTeenager;

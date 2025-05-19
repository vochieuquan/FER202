function SortedPeople() {
  const people = [
    { name: "Alice", age: 22, occupation: "Designer" },
    { name: "Bob", age: 25, occupation: "Engineer" },
    { name: "Charlie", age: 23, occupation: "Designer" },
    { name: "David", age: 30, occupation: "Engineer" },
    { name: "Eva", age: 20, occupation: "Student" }
  ];

  // Tạo bản sao mảng và sắp xếp
  const sortedPeople = [...people].sort((a, b) => {
    if (a.occupation < b.occupation) return -1;
    if (a.occupation > b.occupation) return 1;
    // Nếu occupation giống nhau thì so sánh tuổi
    return a.age - b.age;
  });

  return (
    <div>
      <h2>Sorted People (by Occupation, then Age)</h2>
      <ul>
        {sortedPeople.map((person, index) => (
          <li key={index}>
            Name: {person.name}, Age: {person.age}, Occupation: {person.occupation}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SortedPeople;

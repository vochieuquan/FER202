import React from "react";
import ItemList from "./ItemList";
import QuestionBank from "./QuestionBank";
function App() {
  return (
    <div>
      <h1>Danh sách</h1>
      <ItemList />
      <h1>Câu Hỏi
        <QuestionBank />
      </h1>
    </div>
  );
}

export default App;
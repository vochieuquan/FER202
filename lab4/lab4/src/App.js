import React from 'react';
import { QuizProvider } from './QuizContext';
import Quiz from './Quiz';

function App() {
  return (
    <QuizProvider>
      <div className="App">
        <Quiz />
      </div>
    </QuizProvider>
  );
}

export default App;

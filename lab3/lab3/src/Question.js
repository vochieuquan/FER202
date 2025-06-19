// Question.js
import React from 'react';

const Question = ({ question, options, onAnswer }) => {
  return (
    <div>
      <h2>{question}</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {options.map((option, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            <button onClick={() => onAnswer(option)}>
              {option}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;

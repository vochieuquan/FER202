// Result.js
import React from 'react';

const Result = ({ score, total }) => {
  return (
    <div>
      <h2>Quiz Completed!</h2>
      <p>Your Score: {score} out of {total}</p>
    </div>
  );
};

export default Result;

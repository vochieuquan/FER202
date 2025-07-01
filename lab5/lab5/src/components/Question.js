import { useState } from 'react';

export default function Question({ data }) {
  const [selected, setSelected] = useState(null);
  const [answered, setAnswered] = useState(false);

  const handleSelect = (index) => {
    if (!answered) {
      setSelected(index);
      setAnswered(true);
    }
  };

  return (
    <div className="mb-4 border p-3 rounded">
      <h5>{data.question}</h5>
      {data.options.map((option, i) => (
        <div key={i} className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name={`q-${data.id}`}
            id={`q-${data.id}-opt-${i}`}
            onChange={() => handleSelect(i)}
            checked={selected === i}
          />
          <label className="form-check-label" htmlFor={`q-${data.id}-opt-${i}`}>
            {option}
          </label>
        </div>
      ))}

      {answered && (
        <p className="mt-2">
          {selected === data.answer ? "✅ Hay em!" : "❌ Sai rồi má!"}
        </p>
      )}
    </div>
  );
}

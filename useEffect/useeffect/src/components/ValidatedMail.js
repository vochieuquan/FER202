import React, { useState } from "react";
import validator from "validator";

export default function App() {
  const [message, setMessage] = useState("");
  const validateEmail = (e) => {
    const email = e.target.value;

    if (validator.isEmail(email)) {
      setMessage("Thank you");
    } else {
      setMessage("Please, enter valid Email!");
    }
  };

  return (
    <div>
      <h2>Validating Email in ReactJS</h2>
      <label htmlFor="userEmail">Enter Email:</label>
      <input
        type="text"
        id="userEmail"
        onChange={(e) => validateEmail(e)}
      ></input>
      <br />
      <span
        style={{
          fontWeight: "bold",
          color: "red"
        }}
      >
        {message}
      </span>
    </div>
  );
}

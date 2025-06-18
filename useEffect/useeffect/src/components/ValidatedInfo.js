import React, { useState } from "react";

function ValidatedInfo() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [agree, setAgree] = useState(false);

  const [nameError, setNameError] = useState("");
  const [genderError, setGenderError] = useState("");
  const [countryError, setCountryError] = useState("");
  const [agreeError, setAgreeError] = useState("");

  const validate = () => {
    let valid = true;

    if (name.trim().length < 3) {
      setNameError("Name must be at least 3 characters long.");
      valid = false;
    } else {
      setNameError("");
    }

    if (!gender) {
      setGenderError("Please select a gender.");
      valid = false;
    } else {
      setGenderError("");
    }

    if (!country) {
      setCountryError("Please select a country.");
      valid = false;
    } else {
      setCountryError("");
    }

    if (!agree) {
      setAgreeError("You must agree to the terms and conditions.");
      valid = false;
    } else {
      setAgreeError("");
    }

    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully!");
      // Reset form if needed
      setName("");
      setGender("");
      setCountry("");
      setAgree(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{maxWidth: 400, margin: "0 auto"}}>
      <div style={{marginBottom: 12}}>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          style={{display: "block", width: "100%", marginTop: 4}}
        />
        {nameError && <div style={{color: "red", fontSize: 13}}>{nameError}</div>}
      </div>

      <div style={{marginBottom: 12}}>
        <label>Gender</label>
        <div>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={gender === "male"}
            onChange={e => setGender(e.target.value)}
          /> Male
          <input
            type="radio"
            name="gender"
            value="female"
            checked={gender === "female"}
            onChange={e => setGender(e.target.value)}
            style={{marginLeft: 10}}
          /> Female
          <input
            type="radio"
            name="gender"
            value="other"
            checked={gender === "other"}
            onChange={e => setGender(e.target.value)}
            style={{marginLeft: 10}}
          /> Other
        </div>
        {genderError && <div style={{color: "red", fontSize: 13}}>{genderError}</div>}
      </div>

      <div style={{marginBottom: 12}}>
        <label>Country</label>
        <select
          value={country}
          onChange={e => setCountry(e.target.value)}
          style={{display: "block", width: "100%", marginTop: 4}}
        >
          <option value="">--Select--</option>
          <option value="danang">Việt Nam</option>
          <option value="hanoi">Mỹ</option>
          <option value="hcm">Nhật</option>
        </select>
        {countryError && <div style={{color: "red", fontSize: 13}}>{countryError}</div>}
      </div>

      <div style={{marginBottom: 12}}>
        <input
          type="checkbox"
          checked={agree}
          onChange={e => setAgree(e.target.checked)}
          id="agree"
        />
        <label htmlFor="agree" style={{marginLeft: 6}}>
          I agree to the terms and conditions
        </label>
        {agreeError && <div style={{color: "red", fontSize: 13}}>{agreeError}</div>}
      </div>

      <button
        type="submit"
        disabled={
          !name ||
          name.trim().length < 3 ||
          !gender ||
          !country ||
          !agree
        }
        style={{padding: "6px 16px"}}
      >
        Submit
      </button>
    </form>
  );
}

export default ValidatedInfo;
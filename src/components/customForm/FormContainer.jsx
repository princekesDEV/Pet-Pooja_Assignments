import React, { useState } from "react";
import CheckBoxGroup from "./CheckBoxGroup.jsx";
import RadioGroup from "./RadioGroup.jsx";
import "../../styles/form.css";

function FormContainer() {
  const [inputValue, setInputValue] = useState({
    inputName: "",
    inputEmail: "",
    textarea: "",
  });

  function handleInputChange(e) {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  }

  function handleFormSubmit(e) {
    e.preventDefault();
  }

  return (
    <div>
      <form>
        <label htmlFor="name">
          Name:
          <input
            value={inputValue.inputName}
            type="text"
            placeholder="Enter Your Name"
            required
            minLength={3}
            id="name"
            onChange={handleInputChange}
            name="inputName"
          />
        </label>{" "}
        <br />
        <label htmlFor="email">
          Email:
          <input
            value={inputValue.inputEmail}
            type="email"
            placeholder="Enter Your Email"
            required
            id="email"
            onChange={handleInputChange}
            name="inputEmail"
          />
        </label>{" "}
        <br />
        <label htmlFor="textarea">
          Description:
          <textarea
            value={inputValue.textarea}
            name="textarea"
            id="textarea"
            placeholder="Enter From Description"
            rows={10}
            cols={30}
            onChange={handleInputChange}
          ></textarea>
        </label>
        <br />
        <label htmlFor="feedback-priority">
          Feedback Priority:{" "}
          <select name="feedback-priority" id="feedback-priority">
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </label>
        <CheckBoxGroup />
        <RadioGroup />
        <input
          onClick={handleFormSubmit}
          id="form-submit-btn"
          type="submit"
          value="Submit Form"
        />
      </form>
    </div>
  );
}

export default FormContainer;

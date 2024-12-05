import React from "react";

function RadioGroup() {
  return (
    <div>
      <p>Radio Buttons:</p>
      <label htmlFor="radio-btn1">
        <input type="radio" name="radio-btn" id="radio-btn1" /> Btn1
      </label>{" "}
      <br />
      <label htmlFor="radio-btn2">
        <input type="radio" name="radio-btn" id="radio-btn2" /> Btn2
      </label>{" "}
      <br />
      <label htmlFor="radio-btn3">
        <input type="radio" name="radio-btn" id="radio-btn3" /> Btn3
      </label>{" "}
      <br />
      <label htmlFor="radio-btn4">
        <input type="radio" name="radio-btn" id="radio-btn4" /> Btn4
      </label>{" "}
      <br />
      <label htmlFor="radio-btn5">
        <input type="radio" name="radio-btn" id="radio-btn5" /> Btn5
      </label>{" "}
      <br />
    </div>
  );
}

export default RadioGroup;

import React from "react";

function RadioGroup() {
  const radioBtnsConfig = [
    { id: "radio-btn1", name: "Btn1" },
    { id: "radio-btn2", name: "Btn2" },
    { id: "radio-btn3", name: "Btn3" },
    { id: "radio-btn4", name: "Btn4" },
    { id: "radio-btn5", name: "Btn5" },
  ];

  return (
    <div>
      <p>Radio Buttons:</p>
      {radioBtnsConfig.map((btn) => (
        <>
          <label className="radio-btn-label" htmlFor={btn.id}>
            <input type="radio" name="radio-btn" id={btn.id} /> {btn.name}
          </label>
          <br />
        </>
      ))}
      {/* <label htmlFor="radio-btn1">
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
      <br /> */}
    </div>
  );
}

export default RadioGroup;

import React from "react";

function CheckBoxGroup() {
  const checkboxConfig = [
    { id: "type1", name: "Issue1" },
    { id: "type2", name: "Issue2" },
    { id: "type3", name: "Issue3" },
    { id: "type4", name: "Issue4" },
    { id: "type5", name: "Issue5" },
    { id: "type6", name: "Issue6" },
  ];

  return (
    <div>
      <p>Select Following issues:</p>
      {checkboxConfig.map((btn) => (
        <p>
          <label className="check-btn-label" htmlFor={btn.id}>
            <input type="checkbox" name="feedback-type" id={btn.id} />{" "}
            {btn.name}
          </label>
        </p>
      ))}
    </div>
  );
}

export default CheckBoxGroup;

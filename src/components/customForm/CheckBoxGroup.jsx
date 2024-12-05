import React from "react";

function CheckBoxGroup() {
  return (
    <div>
      <p>Select Following issues:</p>
      <br />
      <label htmlFor="type1">
        <input name="feedback-type" type="checkbox" /> Issue1
      </label>{" "}
      <br />
      <label htmlFor="type2">
        <input name="feedback-type" type="checkbox" /> Issue2
      </label>{" "}
      <br />
      <label htmlFor="type3">
        <input name="feedback-type" type="checkbox" /> Issue3
      </label>{" "}
      <br />
      <label htmlFor="type4">
        <input name="feedback-type" type="checkbox" /> Issue4
      </label>{" "}
      <br />
      <label htmlFor="type5">
        <input name="feedback-type" type="checkbox" /> Issue5
      </label>{" "}
      <br />
      <label htmlFor="type6">
        <input name="feedback-type" type="checkbox" /> Issue6
      </label>{" "}
      <br />
    </div>
  );
}

export default CheckBoxGroup;

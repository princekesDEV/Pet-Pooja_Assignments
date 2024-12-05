import React from "react";
import "../../styles/switchButton.css";

function SwitchButton() {
  return (
    <div className="checkbox-wrapper-3">
      <input type="checkbox" id="cbx-3" />
      <label for="cbx-3" className="toggle">
        <span></span>
      </label>
    </div>
  );
}

export default SwitchButton;

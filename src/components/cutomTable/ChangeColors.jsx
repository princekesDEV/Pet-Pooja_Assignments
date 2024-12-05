import React, { useState } from "react";
import "../../styles/table.css"

function ChangeColors({ initialColor, handleColorChange }) {
  return (
    <>
      <div className="change-colors-input" >
        <label htmlFor="header-color">
          Change Header Color:{" "}
          <input
            value={initialColor}
            onChange={handleColorChange}
            type="color"
            name="headerColor"
            id="header-color"
          />
        </label>
        <br />
        <label htmlFor="headerBgColor">
          Change Header Background Color:
          <input
            value={initialColor}
            onChange={handleColorChange}
            type="color"
            name="headerBgColor"
            id="headerBgColor"
          />
        </label>
        <br />

        <label htmlFor="BodyBgColor">
          Change Body Background Color:
          <input
            value={initialColor}
            onChange={handleColorChange}
            type="color"
            name="BodyBgColor"
            id="BodyBgColor"
          />
        </label>
        <br />

        <label htmlFor="bodyColor">
          Change Body Color:
          <input
            value={initialColor}
            onChange={handleColorChange}
            type="color"
            name="bodyColor"
            id="bodyColor"
          />
        </label>
      </div>
    </>
  );
}

export default ChangeColors;

import React from "react";

function FilterInput({ value, onChange }) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{ width: "100%", padding: "0.2rem", marginTop: "3px" }}
      placeholder= "search"
    />
  );
}

export default FilterInput;

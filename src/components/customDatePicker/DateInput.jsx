import React from "react";

const DateInput = ({ label, value, onChange, styles }) => {
  return (
    <div style={{ ...styles.dateInputContainer }}>
      <label>{label}</label>
      <input
        type="date"
        value={value ? value.toISOString().substring(0, 10) : ""}
        onChange={onChange}
        style={{ ...styles.dateInput }}
      />
    </div>
  );
};

export default DateInput;

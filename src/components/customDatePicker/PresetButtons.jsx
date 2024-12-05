import React from "react";
import "../../styles/buttons.css";

const PresetButtons = ({ selectedPreset, onSelectPreset, styles }) => {
  const presets = [
    "Today",
    "Yesterday",
    "This Month",
    "Last Month",
    "Custom Range",
  ];

  return (
    <div style={{ ...styles.presetContainer }}>
      {presets.map((preset) => (
        <button
          key={preset}
          onClick={() => onSelectPreset(preset)}
          className="preset-btns"
        >
          {preset}
        </button>
      ))}
    </div>
  );
};

export default PresetButtons;

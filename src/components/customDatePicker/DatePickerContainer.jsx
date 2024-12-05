import React, { useState, useEffect } from "react";
import PresetButtons from "./PresetButtons";
import CustomDateRange from "./CustomDateRange";

const DatePickerContainer = ({ onDateChange, styles, selectedDates }) => {
  const [selectedPreset, setSelectedPreset] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [isCustomRange, setIsCustomRange] = useState(false);

  const handlePresetSelection = (preset) => {
    const today = new Date();
    setSelectedPreset(preset);

    switch (preset) {
      case "Today":
        setStartDate(today);
        setEndDate(today);
        setIsCustomRange(false);
        break;
      case "Yesterday":
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        setStartDate(yesterday);
        setEndDate(yesterday);
        setIsCustomRange(false);
        break;
      case "This Month":
        setStartDate(new Date(today.getFullYear(), today.getMonth(), 1));
        setEndDate(new Date(today.getFullYear(), today.getMonth() + 1, 0));
        setIsCustomRange(false);
        break;
      case "Last Month":
        setStartDate(new Date(today.getFullYear(), today.getMonth() - 1, 1));
        setEndDate(new Date(today.getFullYear(), today.getMonth(), 0));
        setIsCustomRange(false);
        break;
      case "Custom Range":
        setIsCustomRange(true);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (!isCustomRange) {
      onDateChange({ startDate, endDate });
    }
  }, [startDate, endDate, isCustomRange]);

  return (
    <div style={{ ...styles.container }}>
      <PresetButtons
        selectedPreset={selectedPreset}
        onSelectPreset={handlePresetSelection}
        styles={styles}
      />
      {isCustomRange && (
        <CustomDateRange
          startDate={startDate}
          endDate={endDate}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
          onDateChange={onDateChange}
          styles={styles}
        />
      )}

      <div>
        <h2>Selected Date Range:</h2>
        <p>
          Start Date:{" "}
          {selectedDates.startDate
            ? selectedDates.startDate.toDateString()
            : "None"}
        </p>
        <p>
          End Date:{" "}
          {selectedDates.endDate
            ? selectedDates.endDate.toDateString()
            : "None"}
        </p>
      </div>
    </div>
  );
};

export default DatePickerContainer;

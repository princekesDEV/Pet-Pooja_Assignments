import React from 'react';
import DateInput from './DateInput';

const CustomDateRange = ({
  startDate,
  endDate,
  setStartDate,
  setEndDate,
  onDateChange,
  styles,
}) => {
  const handleDateChange = (type, value) => {
    const date = new Date(value);
    if (type === 'start') {
      setStartDate(date);
      if (endDate && date > endDate) setEndDate(date);
    } else {
      if (startDate && date >= startDate) setEndDate(date);
    }
    onDateChange({ startDate, endDate });
  };

  return (
    <div style={{ ...styles.customRangeContainer }}>
      <DateInput
        label="From"
        value={startDate}
        onChange={(e) => handleDateChange('start', e.target.value)}
        styles={styles}
      />
      <DateInput
        label="To"
        value={endDate}
        onChange={(e) => handleDateChange('end', e.target.value)}
        styles={styles}
      />
    </div>
  );
};

export default CustomDateRange;

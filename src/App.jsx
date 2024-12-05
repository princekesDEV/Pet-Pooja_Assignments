import { useState } from "react";
import TableContainer from "./components/cutomTable/TableContainer";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import FormContainer from "./components/customForm/FormContainer.jsx";
import DatePickerContainer from "./components/customDatePicker/DatePickerContainer.jsx";

const tableData = [
  { id: 1, name: "Prince", age: 18 },
  { id: 2, name: "Rishu", age: 21 },
  { id: 3, name: "Aman", age: 35 },
  { id: 4, name: "Harsh", age: 23 },
  { id: 5, name: "Harsh", age: 34 },
  { id: 6, name: "Harsh", age: 11 },
];

const tableConfig = [
  { title: "ID", key: "id", sortable: true, filterable: true },
  { title: "Name", key: "name", sortable: true, filterable: true },
  { title: "Age", key: "age", sortable: true, filterable: true },
];

const styles = {
  container: { padding: "20px", fontFamily: "Arial, sans-serif" },
  presetContainer: { display: "flex", gap: "10px" },
  presetButton: {
    padding: "10px 15px",
    cursor: "pointer",
    border: "0",
    borderRadius: "4px",
  },
  activePresetButton: { backgroundColor: "blue", color: "white", border: "0" },
  customRangeContainer: { marginTop: "20px" },
  dateInputContainer: {
    display: "flex",
    flexDirection: "column",
    margin: "10px 0",
  },
  dateInput: { padding: "5px", fontSize: "16px" },
};

function App() {
  const [selectedDates, setSelectedDates] = useState({
    startDate: null,
    endDate: null,
  });
  const handleDateChange = (dates) => {
    setSelectedDates(dates);
    console.log("Selected Dates:", dates);
  };
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <TableContainer tableData={tableData} tableConfig={tableConfig} />
          }
        />
        <Route path="/form" element={<FormContainer />} />
        <Route
          path="/date-picker"
          element={
            <DatePickerContainer
              onDateChange={handleDateChange}
              styles={styles}
              selectedDates={selectedDates}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;

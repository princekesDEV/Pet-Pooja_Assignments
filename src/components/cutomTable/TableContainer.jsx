import React, { useState, useMemo } from "react";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";
import "../../styles/table.css";
import ChangeColors from "./ChangeColors";

function TableContainer({ tableData, tableConfig }) {
  const [sortConfig, setSortConfig] = useState(null);
  const [filters, setFilters] = useState({});
  const [initialColor, setInitialColor] = useState("rgb(255, 255, 255)");
  const [styles, setStyles] = useState({
    headerBgColor: "#FADA7A",
    headerColor: "black",
    BodyBgColor: "#B1F0F7",
    bodyColor: "black",
  });

  function handleColorChange(e) {
    console.log(e.target.value);
    setInitialColor(e.target.value);
    setStyles({ ...styles, [e.target.name]: e.target.value });
  }

  const sortedData = useMemo(() => {
    if (!sortConfig) return tableData;
    return [...tableData].sort((a, b) => {
      const valueA = a[sortConfig.key];
      const valueB = b[sortConfig.key];
      if (valueA < valueB) return sortConfig.direction === "asc" ? -1 : 1;
      if (valueA > valueB) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });
  }, [tableData, sortConfig]);

  // Filtering logic
  const filteredData = useMemo(() => {
    return sortedData.filter((row) =>
      Object.entries(filters).every(([key, value]) =>
        row[key]?.toString().toLowerCase().includes(value.toLowerCase())
      )
    );
  }, [sortedData, filters]);

  return (
    <>
      <ChangeColors
        initialColor={initialColor}
        handleColorChange={handleColorChange}
      />
      <table>
        <div className="table-container">
          <TableHeader
            sortConfig={sortConfig}
            tableData={tableData}
            tableConfig={tableConfig}
            setSortConfig={setSortConfig}
            filters={filters}
            setFilters={setFilters}
            styles={styles}
          />
          <TableBody
            data={filteredData}
            tableConfig={tableConfig}
            styles={styles}
          />
        </div>
      </table>
    </>
  );
}

export default TableContainer;

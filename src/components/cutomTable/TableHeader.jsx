import React from "react";
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";
import FilterInput from "./FilterInput";
import "../../styles/table.css";

function TableHeader({
  tableConfig,
  sortConfig,
  setSortConfig,
  filters,
  setFilters,
  styles,
}) {
  const handleSort = (key) => {
    const direction =
      sortConfig?.key === key && sortConfig.direction === "asc"
        ? "desc"
        : "asc";
    setSortConfig({ key, direction });
  };

  return (
    <table style={{ width: "100%" }}>
      <thead style={{ width: "100%" }}>
        <tr>
          {tableConfig.map((content) => (
            <th
              key={content.key}
              style={{
                fontSize: "16px",
                backgroundColor: styles.headerBgColor,
                color: styles.headerColor,
              }}
            >
              <div
                onClick={() => handleSort(content.key)}
                style={{ cursor: content.sortable ? "pointer" : "default" }}
              >
                {content.title}
                {content.sortable && (
                  <>
                    {sortConfig?.key === content.key ? (
                      sortConfig.direction === "asc" ? (
                        <FaSortUp />
                      ) : (
                        <FaSortDown />
                      )
                    ) : (
                      <FaSort />
                    )}
                  </>
                )}
              </div>
              {content.filterable && (
                <FilterInput
                  value={filters[content.key] || ""}
                  onChange={(value) =>
                    setFilters({ ...filters, [content.key]: value })
                  }
                />
              )}
            </th>
          ))}
        </tr>
      </thead>
    </table>
  );
}

export default TableHeader;

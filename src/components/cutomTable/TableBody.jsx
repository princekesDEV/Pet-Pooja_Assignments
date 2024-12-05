import React from "react";
import "../../styles/table.css";

function TableBody({ data, tableConfig, styles }) {
  return (
    <table>

    <tbody
      style={{
        backgroundColor: styles.BodyBgColor,
        color: styles.bodyColor,
      }}
    >
      {data.map((row, index) => (
        <tr  key={index} style={{ width: "100%"}}>
          {tableConfig.map((content) => (
            <td key={content.key} style={{ fontSize: "14px", border:"1.5px solid #ddd" }}>
              {row[content.key]}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
    </table>
  );
}

export default TableBody;

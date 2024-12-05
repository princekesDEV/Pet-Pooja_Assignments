import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  function handleNavigate(path) {
    navigate(path);
  }

  const navButtonConfig = [
    { name: "Custom Table", path: "/" },
    { name: "Custom Form", path: "/form" },
    { name: "Custom Date Picker", path: "/date-picker" },
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        gap: "10rem",
        padding: "1rem 2rem",
        backgroundColor: "#ddd",
        margin: "1rem auto",
        borderRadius: "0.3rem",
      }}
    >
      {navButtonConfig.map((btn) => (
        <button className="nav-btns" onClick={() => handleNavigate(btn.path)}>
          {" "}
          {btn.name}{" "}
        </button>
      ))}
    </div>
  );
}

export default Navbar;

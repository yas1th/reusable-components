import React from "react";
import "./VHButton.css";

const VHButton = ({ text, onClick }) => {
  return (
    <button className="vh-btn" onClick={onClick}>
      {text}
    </button>
  );
};

export default VHButton;

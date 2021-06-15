import React, { useState, useEffect } from "react";
import { AiOutlineCopy } from "react-icons/ai";

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [alert]);

  const copyToClipboard = () => {
    setAlert(true);
    navigator.clipboard.writeText(`#${hexColor}`);
  };
  return (
    <div
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
    >
      <button className="copy-button" onClick={copyToClipboard}>
        <AiOutlineCopy className="copy-btn" />
      </button>
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hexColor}</p>
      {alert && <p className="alert">copied to clipboard</p>}
    </div>
  );
};

export default SingleColor;

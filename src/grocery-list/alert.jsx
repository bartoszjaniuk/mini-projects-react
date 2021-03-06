import React, { useEffect } from "react";

const Alert = ({ show, type, message, removeAlert }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 2000);
    return () => clearTimeout(timeout);
  }, [show]);
  return <p className={`alert alert-${type}`}>{message}</p>;
};

export default Alert;

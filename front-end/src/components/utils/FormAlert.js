import React from "react";
import "./alert.styles.css";

const FormAlert = ({ children }) => {
	return <div className="custom-danger-alert">{children}</div>;
};

export default FormAlert;

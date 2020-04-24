import React from "react";
import "./custom-button.styles.css";

const CustomButton = ({
	submit,
	signInWithGoogle,
	children,
	...otherprops
}) => {
	return (
		<div
			className={`${signInWithGoogle ? "signinwithgoogle" : ""} custom-button`}>
			<button {...otherprops}>{children}</button>
		</div>
	);
};

export default CustomButton;

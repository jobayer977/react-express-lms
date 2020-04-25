import React, { useEffect, useState } from "react";
import "./auth-page.styles.css";
import SignInBlock from "../../components/sign-in-block/SignInBlock";
import SignUpBlock from "../../components/signup-block/SignUpBlock";
const AuthPage = () => {
	const [toggle, setToggle] = useState(true);
	useEffect(() => {
		window.scrollTo({
			top: "351",
			behavior: "smooth",
		});
	});
	///TOGGLE HANDLER
	const toggleHandler = () => {
		setToggle(!toggle);
	};

	return (
		<div className="auth-page">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						{toggle ? (
							<SignInBlock toggleHandler={toggleHandler} />
						) : (
							<SignUpBlock toggleHandler={toggleHandler} />
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default AuthPage;

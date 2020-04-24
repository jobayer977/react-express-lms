import React, { useState, useEffect } from "react";
import "./header-block-styles.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { logout } from "../../redux/auth/auth.actions";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";

const HeaderBlock = ({ authState, logout }) => {
	const [scrollPosition, setSrollPosition] = useState(0);
	useEffect(() => {
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [scrollPosition]);
	const handleScroll = () => {
		const position = window.pageYOffset;
		setSrollPosition(position);
	};
	const handlerSignOut = () => {
		auth.signOut();
		logout();
	};
	return (
		<header
			className={`${scrollPosition > 150 ? "custom-fixed" : ""} header-block`}>
			<div className="container">
				<div className="header-block-content">
					<div className="header-logo">
						<Link to="/">
							<img src={logo} alt="" />
						</Link>
					</div>
					<div className="navigation">
						<div className="option">
							<Link to="/dashboard">Dashboard</Link>
						</div>
						{authState.isAuthenticated ? (
							<div className="option" onClick={handlerSignOut}>
								Logout
							</div>
						) : (
							<div className="option">
								<Link to="/auth">Sign In</Link>
							</div>
						)}
					</div>
				</div>
			</div>
		</header>
	);
};

const mapStateToProps = (state) => ({
	authState: state.auth,
});

export default connect(mapStateToProps, { logout })(HeaderBlock);

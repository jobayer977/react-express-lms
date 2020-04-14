import React, { useState, useEffect } from "react";
import "./header-block-styles.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
const HeaderBlock = () => {
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
							<Link to="/auth">Sign In</Link>
						</div>
						<div className="option">
							<Link to="/student-dashboard">Dashboard</Link>
						</div>
						<div className="option">
							<Link to="/admin-dashboard">Admin Dashboard</Link>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default HeaderBlock;

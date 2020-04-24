import React from "react";
import "./hero-section.styles.css";

const HeroSection = () => {
	return (
		<section className="hero-block">
			<div className="container">
				<div className="hero-content">
					<h1>
						Build Your <span>Empire</span>
					</h1>
					<p>Start small and build build build !!</p>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;

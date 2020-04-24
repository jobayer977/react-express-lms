import React from "react";
import "./dashboard-block.styles.css";
import CustomTitle from "../custom-title/CustomTitle";
import Statistic from "../statistic/Statistic";

const DashboardBlock = () => {
	return (
		<div className="dashboard-block">
			<CustomTitle thin="Dashboard" tagline="See Your Current Status" medium />
			<div className="statistic-block">
				<Statistic
					number={23}
					title="Enrolled Courses
"
					danger
				/>
				<Statistic
					number={23}
					title="Active Courses
"
					primary
				/>
				<Statistic
					number={23}
					title="Completed Courses
"
					success
				/>
				<Statistic number={23} title="Total Marks" warning />
			</div>
		</div>
	);
};

export default DashboardBlock;

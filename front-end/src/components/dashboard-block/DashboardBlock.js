import React from "react";
import "./dashboard-block.styles.css";
import CustomTitle from "../custom-title/CustomTitle";
import Statistic from "../statistic/Statistic";
import { connect } from "react-redux";

const DashboardBlock = ({ profile }) => {
	return (
		<div className="dashboard-block">
			<CustomTitle thin="Dashboard" tagline="See Your Current Status" medium />
			<div className="statistic-block">
				<Statistic
					number={profile.enrolled.length}
					title="Enrolled Courses
"
					danger
				/>
				<Statistic
					number={profile.enrolled.length}
					title="Active Courses
"
					primary
				/>
				<Statistic
					number={profile.enrolled.length}
					title="Completed Courses
"
					success
				/>
				<Statistic
					number={profile.enrolled.length}
					title="Total Marks"
					warning
				/>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	profile: state.profile.data.courses,
});

export default connect(mapStateToProps, {})(DashboardBlock);

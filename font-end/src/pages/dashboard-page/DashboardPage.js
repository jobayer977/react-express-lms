import React from "react";
import "./dashboard-page.styles.css";
import { connect } from "react-redux";
import AdminDashboardPage from "../../components/admin-dashboard/AdminDashboardPage";
import StudentDashboardPage from "../student-dashboard/StudentDashboardPage";

const DashboardPage = ({ authState: { user } }) => {
	return (
		<div className="dashboard-page">
			{user && user.membership == "admin" ? (
				<AdminDashboardPage />
			) : (
				<StudentDashboardPage />
			)}
		</div>
	);
};
const mapStateToProps = (state) => ({
	authState: state.auth,
});
export default connect(mapStateToProps)(DashboardPage);

import React from "react";
import "./module-action-page.css";
import CreateModuleForm from "../../components/create-module-form/CreateModuleForm";
import CustomTitle from "../../components/custom-title/CustomTitle";
import DashboardModuleList from "../../components/dashboard-module-list/DashboardModuleList";
import Alert from "../../components/utils/Alert";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const ModuleActionPage = ({ courses }) => {
	useEffect(() => {
		window.scrollTo({
			top: "200",
			behavior: "smooth",
		});
	});
	const { courseId } = useParams();
	const filterCourse = courses.find((course) => course._id === courseId);
	return (
		<div className="admin-dashboard-module-page">
			<div className="container">
				<CustomTitle
					bold="Module List of"
					thin={filterCourse.title}
					tagline="Show all module in this course"
					medium
				/>
				<div className="row">
					<div className="col-md-6">
						<div className="module-list">
							<DashboardModuleList />
						</div>
					</div>
					<div className="col-md-6">
						<Alert />
						<CreateModuleForm />
					</div>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	courses: state.course.data,
});

export default connect(mapStateToProps)(ModuleActionPage);

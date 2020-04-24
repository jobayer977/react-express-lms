import React from "react";
import "./module-action-page.css";
import CreateModuleForm from "../../components/create-module-form/CreateModuleForm";
import CustomTitle from "../../components/custom-title/CustomTitle";
import DashboardModuleList from "../../components/dashboard-module-list/DashboardModuleList";

const ModuleActionPage = () => {
	return (
		<div className="admin-dashboard-module-page">
			<div className="container">
				<CustomTitle
					bold="Module List of"
					thin="React Redux completed"
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
						<CreateModuleForm />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ModuleActionPage;

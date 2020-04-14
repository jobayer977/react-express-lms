import React, { useEffect } from "react";
import "./student-dashboard-pages.css";
import Tab from "react-bootstrap/Tab";
import { Link } from "react-router-dom";
// Bootstrap
import Nav from "react-bootstrap/Nav";
// Material icons
import DashboardIcon from "@material-ui/icons/Dashboard";
import EventRoundedIcon from "@material-ui/icons/EventRounded";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import NoteAddOutlinedIcon from "@material-ui/icons/NoteAddOutlined";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
import DashboardBlock from "../../components/dashboard-block/DashboardBlock";
import ProfileBlock from "../../components/profile-block/ProfileBlock";
import EnrolledCoursesBlock from "../../components/enrolled-courses-block/EnrolledCoursesBlock";
import CustomTitle from "../../components/custom-title/CustomTitle";

const StudentDashboard = () => {
	useEffect(() => {
		window.scrollTo({
			top: 230,
			behavior: "smooth",
		});
	}, []);
	return (
		<div className="dashboard-page">
			<div className="container-fluid">
				<div className="dashboard-content">
					<div className="dashboard-panels">
						<Tab.Container id="left-tabs-example" defaultActiveKey="dashboard">
							<div className="dashboard-content-block">
								<div className="dashboard-content-navigation">
									<div className="custom-tab-pills">
										<Nav variant="pills" className="flex-column ">
											<Nav.Item>
												<Nav.Link eventKey="dashboard">
													<DashboardIcon />
													Dashboard
												</Nav.Link>
											</Nav.Item>
											<Nav.Item>
												<Nav.Link eventKey="appointment">
													<EventRoundedIcon />
													Enrolled Courses
												</Nav.Link>
											</Nav.Item>
											<Nav.Item>
												<Nav.Link eventKey="patients">
													<PeopleAltOutlinedIcon />
													Profile
												</Nav.Link>
											</Nav.Item>
											<Nav.Item>
												<Nav.Link eventKey="prescriptions">
													<NoteAddOutlinedIcon />
													Quiz
												</Nav.Link>
											</Nav.Item>
										</Nav>

										<div className="tab-action">
											<Link to="#">
												<ExitToAppOutlinedIcon />
												Logout
											</Link>
										</div>
									</div>
								</div>
								<div className="dashboard-content-items">
									<div className="custom-tab-content">
										<Tab.Content>
											<Tab.Pane eventKey="dashboard">
												<DashboardBlock />
											</Tab.Pane>
											<Tab.Pane eventKey="appointment">
												<EnrolledCoursesBlock />
											</Tab.Pane>
											<Tab.Pane eventKey="patients">
												<ProfileBlock />
											</Tab.Pane>
											<Tab.Pane eventKey="prescriptions">
												<CustomTitle
													bold="Quiz"
													tagline="Recap what you learn"
													medium
												/>
											</Tab.Pane>
										</Tab.Content>
									</div>
								</div>
							</div>
						</Tab.Container>
					</div>
				</div>
			</div>
		</div>
	);
};

export default StudentDashboard;

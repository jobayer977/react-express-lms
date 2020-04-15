import React, { useEffect } from "react";
import "./admin-dashboard-pages.css";
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

import DashboardBlock from "../dashboard-block/DashboardBlock";
import CustomTitle from "../custom-title/CustomTitle";
import CreateCourseForm from "../create-course-form/CreateCourseForm";
import CourseListBlock from "../course-list-block/CourseListBlock";

const AdminDashboardPage = () => {
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
												<Nav.Link eventKey="createCourse">
													<EventRoundedIcon />
													Create Courses
												</Nav.Link>
											</Nav.Item>
											<Nav.Item>
												<Nav.Link eventKey="courseList">
													<PeopleAltOutlinedIcon />
													Course List
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
											<Tab.Pane eventKey="createCourse">
												<CreateCourseForm />
											</Tab.Pane>
											<Tab.Pane eventKey="courseList">
												<CourseListBlock />
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

export default AdminDashboardPage;

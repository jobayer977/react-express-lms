import React from "react";
import "./course-list-table.styles.css";
import CustomButton from "../custom-button/CustomButton";
import CustomTitle from "../custom-title/CustomTitle";
import { Link } from "react-router-dom";

const CourseListTable = () => {
	return (
		<div className="course-list-table">
			<CustomTitle thin="Course List" tagline="List of all courses" medium />
			<div className="course-list-content">
				<table className="table">
					<thead>
						<tr>
							<th scope="col-md-4" className="tb-title">
								Title
							</th>
							<th scope="col-md-4" className="tb-author">
								author
							</th>
							<th scope="col-md-4" className="tb-action">
								Action
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Jacob</td>
							<td>Thornton</td>
							<td>
								<div className="action-btn-group">
									<CustomButton>Edit</CustomButton>
								</div>
							</td>
						</tr>
						<tr>
							<td>Larry</td>
							<td>the Bird</td>
							<td>
								<div className="action-btn-group">
									<Link to="/course-module-action">
										<CustomButton>Edit</CustomButton>
									</Link>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default CourseListTable;

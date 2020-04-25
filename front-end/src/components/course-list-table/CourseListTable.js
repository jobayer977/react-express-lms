import React from "react";
import "./course-list-table.styles.css";
import CustomButton from "../custom-button/CustomButton";
import CustomTitle from "../custom-title/CustomTitle";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const CourseListTable = ({ courses }) => {
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
						{courses.map((course, i) => (
							<tr key={i}>
								<td>{course.title}</td>
								<td>{course.author}</td>
								<td>
									<div className="action-btn-group">
										<Link to={`/course-module-action/${course._id}`}>
											<CustomButton>Action</CustomButton>
										</Link>
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};
const mapStateToProps = (state) => ({
	courses: state.course.data,
});

export default connect(mapStateToProps)(CourseListTable);

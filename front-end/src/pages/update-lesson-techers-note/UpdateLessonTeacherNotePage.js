import React, { useState, useEffect } from "react";
import "./update-lesson-teachers-note-page.styles.css";
import { useForm } from "react-hook-form";
import CustomButton from "../../components/custom-button/CustomButton";
import CustomTitle from "../../components/custom-title/CustomTitle";
import { createTeachersNote } from "../../redux/course/course.actions";
import { connect } from "react-redux";
import { useParams, Link } from "react-router-dom";
import Alert from "../../components/utils/Alert";

const UpdateLessonTeacherNotePage = ({ createTeachersNote }) => {
	const { register, handleSubmit, errors } = useForm();
	useEffect(() => {
		window.scrollTo({
			top: "280",
			behavior: "smooth",
		});
	});
	const [formData, setFormData] = useState({
		referenceTitle: "",
		referenceLinks: "",
	});

	const onChangeHandler = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};
	const { courseId, moduleId, lessonId } = useParams();
	const onSubmithandler = () => {
		createTeachersNote(formData, courseId, moduleId, lessonId);
		setFormData({
			referenceTitle: "",
			referenceLinks: "",
		});
	};
	const { referenceTitle, referenceLinks } = formData;
	return (
		<div className="create-course-form py-5">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<Alert />
						<CustomTitle
							thin="Add Teacher's Note"
							tagline="Update all reference"
							medium
						/>
						<form onSubmit={handleSubmit(onSubmithandler)}>
							<input
								type="text"
								name="referenceTitle"
								placeholder="ReferenceTitle Title"
								value={referenceTitle}
								ref={register({ required: true })}
								onChange={onChangeHandler}
							/>
							{errors.referenceTitle && "Reference Title is require"}
							<input
								type="text"
								name="referenceLinks"
								placeholder="referenceLinks Link"
								value={referenceLinks}
								ref={register({ required: true })}
								onChange={onChangeHandler}
							/>
							{errors.referenceLinks && "Reference Links is require"}
							<div className="custom-btn-group">
								<CustomButton type="submit">Add Note</CustomButton>
								<Link to="/dashboard">
									<CustomButton>Back To Dashboard</CustomButton>
								</Link>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default connect(null, { createTeachersNote })(
	UpdateLessonTeacherNotePage
);

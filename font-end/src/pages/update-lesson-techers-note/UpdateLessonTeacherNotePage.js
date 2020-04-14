import React, { useState } from "react";
import "./update-lesson-teachers-note-page.styles.css";
import { useForm } from "react-hook-form";
import CustomButton from "../../components/custom-button/CustomButton";
import CustomTitle from "../../components/custom-title/CustomTitle";

const UpdateLessonTeacherNotePage = () => {
	const { register, handleSubmit, errors } = useForm();
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});
	const onSubmithandler = (e) => {
		console.log(formData);
		e.preventDefault();
	};
	const onChangeHandler = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};
	return (
		<div className="create-course-form py-5">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<CustomTitle
							thin="Add Teacher's Note"
							tagline="Update all reference"
							medium
						/>
						<form onSubmit={handleSubmit(onSubmithandler)}>
							<input
								type="text"
								name="referenceTitle"
								ref={register({ required: true })}
								placeholder="ReferenceTitle Title"
								onChange={onChangeHandler}
							/>
							{errors.referenceTitle && "Reference Title require"}
							<input
								type="text"
								name="referenceLinks"
								ref={register({ required: true })}
								placeholder="referenceLinks Link"
								onChange={onChangeHandler}
							/>
							{errors.referenceLinks && "referenceLinks require"}
							<CustomButton type="submit">Add Note</CustomButton>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UpdateLessonTeacherNotePage;

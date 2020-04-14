import React, { useState } from "react";
import "./create-lessson.styles.css";
import { useForm } from "react-hook-form";
import CustomButton from "../custom-button/CustomButton";
import CustomTitle from "../custom-title/CustomTitle";

const CreateLessonForm = () => {
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
		<div className="create-course-form">
			<form onSubmit={handleSubmit(onSubmithandler)}>
				<input
					type="text"
					name="lessonNo"
					ref={register({ required: true })}
					placeholder="Lesson No"
					onChange={onChangeHandler}
				/>
				{errors.lessonNo && "lessonNo require"}
				<input
					type="text"
					name="lessonTitle"
					ref={register({ required: true })}
					placeholder="Lesson Title"
					onChange={onChangeHandler}
				/>
				{errors.lessonTitle && "lessonTitle require"}
				<input
					type="text"
					name="duration"
					ref={register({ required: true })}
					placeholder="Duration"
					onChange={onChangeHandler}
				/>
				{errors.duration && "Duration require"}
				<input
					type="text"
					name="video"
					ref={register({ required: true })}
					placeholder="Video link"
					onChange={onChangeHandler}
				/>
				{errors.video && "video require"}
				<input
					type="text"
					name="attachment"
					ref={register({ required: true })}
					placeholder="Attachment Name"
					onChange={onChangeHandler}
				/>
				{errors.attachment && "attachment require"}
				<input
					type="text"
					name="attachmentLink"
					ref={register({ required: true })}
					placeholder="Attachment mediafire link"
					onChange={onChangeHandler}
				/>
				{errors.attachmentLink && "attachmentLink require"}{" "}
				<textarea
					name="lessonDesc"
					rows="3"
					ref={register({ required: true })}
					placeholder="Description in Bangle"
					onChange={onChangeHandler}></textarea>
				{errors.lessonDesc && "lessonDesc require"}
				<CustomButton type="submit">Submit</CustomButton>
			</form>
		</div>
	);
};

export default CreateLessonForm;

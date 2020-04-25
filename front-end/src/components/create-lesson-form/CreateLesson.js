import React, { useState } from "react";
import "./create-lessson.styles.css";
import { useForm } from "react-hook-form";
import CustomButton from "../custom-button/CustomButton";
import { createLesson } from "../../redux/course/course.actions";
import { useParams, Link } from "react-router-dom";
import { connect } from "react-redux";

const CreateLessonForm = ({ createLesson }) => {
	const { register, handleSubmit, errors } = useForm();
	const [formData, setFormData] = useState({
		lessonNo: "",
		lessonTitle: "",
		duration: "",
		video: "",
		attachment: "",
		attachmentLink: "",
		lessonDesc: "",
	});
	const { courseId, moduleId } = useParams();

	const onSubmithandler = () => {
		createLesson(formData, courseId, moduleId);
		setFormData({
			lessonNo: "",
			lessonTitle: "",
			duration: "",
			video: "",
			attachment: "",
			attachmentLink: "",
			lessonDesc: "",
		});
	};
	const onChangeHandler = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const {
		lessonNo,
		lessonTitle,
		duration,
		video,
		attachment,
		attachmentLink,
		lessonDesc,
	} = formData;
	return (
		<div className="create-course-form">
			<form onSubmit={handleSubmit(onSubmithandler)}>
				<input
					type="text"
					name="lessonNo"
					value={lessonNo}
					ref={register({ required: true })}
					value={lessonNo}
					placeholder="Lesson No"
					onChange={onChangeHandler}
				/>
				{errors.lessonNo && "lesson No is require"}
				<input
					type="text"
					name="lessonTitle"
					ref={register({ required: true })}
					value={lessonTitle}
					placeholder="Lesson Title"
					onChange={onChangeHandler}
				/>
				{errors.lessonTitle && "lesson Title is require"}
				<input
					type="text"
					name="duration"
					ref={register({ required: true })}
					value={duration}
					placeholder="Duration"
					onChange={onChangeHandler}
				/>
				{errors.duration && "lesson Duration is require"}
				<input
					type="text"
					name="video"
					ref={register({ required: true })}
					value={video}
					placeholder="Video link"
					onChange={onChangeHandler}
				/>
				{errors.video && "lesson Video is require"}
				<input
					type="text"
					name="attachment"
					ref={register({ required: true })}
					value={attachment}
					placeholder="Attachment Name"
					onChange={onChangeHandler}
				/>
				{errors.attachment && "lesson attachment Name is require"}
				<input
					type="text"
					name="attachmentLink"
					ref={register({ required: true })}
					value={attachmentLink}
					placeholder="Attachment mediafire link"
					onChange={onChangeHandler}
				/>
				{errors.attachmentLink && "lesson attachmentLink is require"}
				<textarea
					name="lessonDesc"
					rows="3"
					ref={register({ required: true })}
					value={lessonDesc}
					placeholder="Description in Bangle"
					onChange={onChangeHandler}></textarea>
				{errors.lessonDesc && "lessonDesc is require"}

				<div className="custom-btn-group">
					<CustomButton type="submit">Submit</CustomButton>
					<Link to="/dashboard">
						<CustomButton>Back</CustomButton>
					</Link>
				</div>
			</form>
		</div>
	);
};

export default connect(null, { createLesson })(CreateLessonForm);

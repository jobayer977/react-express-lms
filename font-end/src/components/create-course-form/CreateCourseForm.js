import React, { useState } from "react";
import "./create-course-form.styles.css";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import CustomButton from "../custom-button/CustomButton";
import CustomTitle from "../custom-title/CustomTitle";
import { createCourse } from "../../redux/course/course.actions";
import Alert from "../utils/Alert";

const CreateCourseForm = ({ createCourse }) => {
	const { register, handleSubmit, errors } = useForm();
	const [formData, setFormData] = useState(null);
	const onSubmithandler = () => {
		createCourse({ ...formData });
	};
	const onChangeHandler = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};
	return (
		<div className="create-course-form">
			<CustomTitle
				thin="Create new Course"
				tagline="Wow show your ability "
				medium
			/>
			<form onSubmit={handleSubmit(onSubmithandler)}>
				<Alert />
				<input
					type="text"
					name="title"
					ref={register({ required: true })}
					placeholder="Course Title"
					onChange={onChangeHandler}
				/>
				{errors.title && "title require"}
				<input
					type="text"
					name="thumbnail"
					ref={register({ required: true })}
					placeholder="Thumbnail Link"
					onChange={onChangeHandler}
				/>
				{errors.thumbnail && "thumbnail require"}
				<input
					type="text"
					name="price"
					ref={register({ required: true })}
					placeholder="Price"
					onChange={onChangeHandler}
				/>
				{errors.price && "Price require"}
				<input
					type="text"
					name="author"
					ref={register({ required: true })}
					placeholder="Author"
					onChange={onChangeHandler}
				/>
				{errors.author && "author require"}
				<textarea
					name="description"
					rows="3"
					ref={register({ required: true })}
					placeholder="Description in Bangle"
					onChange={onChangeHandler}></textarea>
				{errors.description && "description require"}
				<CustomButton type="submit">Login</CustomButton>
			</form>
		</div>
	);
};

export default connect(null, { createCourse })(CreateCourseForm);

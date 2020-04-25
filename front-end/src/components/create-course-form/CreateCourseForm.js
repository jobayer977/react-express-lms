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
	const [formData, setFormData] = useState({
		title: "",
		thumbnail: "",
		price: "",
		author: "",
		description: "",
	});
	const onSubmithandler = () => {
		createCourse({ ...formData });
		setFormData({
			title: "",
			thumbnail: "",
			price: "",
			author: "",
			description: "",
		});
	};
	const onChangeHandler = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};
	const { title, thumbnail, price, author, description } = formData;
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
					value={title}
					placeholder="Course Title"
					onChange={onChangeHandler}
				/>
				{errors.title && "title require"}
				<input
					type="text"
					name="thumbnail"
					ref={register({ required: true })}
					value={thumbnail}
					placeholder="Thumbnail Link"
					onChange={onChangeHandler}
				/>
				{errors.thumbnail && "thumbnail require"}
				<input
					type="text"
					name="price"
					ref={register({ required: true })}
					value={price}
					placeholder="Price"
					onChange={onChangeHandler}
				/>
				{errors.price && "Price require"}
				<input
					type="text"
					name="author"
					ref={register({ required: true })}
					value={author}
					placeholder="Author"
					onChange={onChangeHandler}
				/>
				{errors.author && "author require"}
				<textarea
					name="description"
					rows="3"
					ref={register({ required: true })}
					value={description}
					placeholder="Description in Bangle"
					onChange={onChangeHandler}></textarea>
				{errors.description && "description require"}
				<CustomButton type="submit">Create</CustomButton>
			</form>
		</div>
	);
};

export default connect(null, { createCourse })(CreateCourseForm);

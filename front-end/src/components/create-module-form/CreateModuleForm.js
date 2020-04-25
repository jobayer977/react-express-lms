import React, { useState } from "react";
import "./create-module-form.styles.css";
import { useForm } from "react-hook-form";
import { useParams, Link } from "react-router-dom";
import CustomButton from "../custom-button/CustomButton";
import { createModule } from "../../redux/course/course.actions";
import { connect } from "react-redux";
import { alertAction } from "../../redux/alert/alertAction";

const CreateModuleForm = ({ createModule, alertAction }) => {
	const { register, handleSubmit, errors } = useForm();
	const [formData, setFormData] = useState({
		moduleNo: "",
		moduleTitle: "",
	});
	const { courseId } = useParams();
	const onSubmithandler = () => {
		createModule(formData, courseId);
		setFormData({ moduleNo: "", moduleTitle: "" });
	};
	const onChangeHandler = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};
	const { moduleNo, moduleTitle } = formData;
	return (
		<div className="create-module-form">
			<form onSubmit={handleSubmit(onSubmithandler)}>
				<input
					type="text"
					name="moduleNo"
					placeholder="Module No"
					value={moduleNo}
					ref={register({ required: true })}
					onChange={onChangeHandler}
				/>
				{errors.moduleNo && "No require"}
				<input
					type="text"
					name="moduleTitle"
					placeholder="Module Title"
					value={moduleTitle}
					ref={register({ required: true })}
					onChange={onChangeHandler}
				/>
				{errors.moduleTitle && "moduleTitle require"}

				<div className="custom-btn-group">
					<CustomButton type="submit">Add Module</CustomButton>
					<Link to="/dashboard">
						<CustomButton>Back</CustomButton>
					</Link>
				</div>
			</form>
		</div>
	);
};

export default connect(null, { createModule, alertAction })(CreateModuleForm);

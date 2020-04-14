import React, { useState } from "react";
import { useForm } from "react-hook-form";
import CustomButton from "../custom-button/CustomButton";
import { signUpNewUser } from "../../firebase/firebase.utils";
import Alert from "../utils/Alert";
import { alertAction } from "../../redux/alert/alertAction";
import { connect } from "react-redux";

const SignUpBlock = ({ toggleHandler, alertAction }) => {
	const { register, handleSubmit, errors } = useForm();
	const [formData, setFormData] = useState(null);

	const onChangeHandler = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const onSubmithandler = async () => {
		if (formData.password1 !== formData.password2) {
			alertAction("Password doesn't match", "danger");
		} else {
			const signUp = await signUpNewUser(
				formData.email,
				formData.password1,
				formData.name
			);
			alertAction(signUp.msg, signUp.type);
		}
	};
	return (
		<div className="auth-form-block">
			<h3>Sign Up</h3>
			<CustomButton signInWithGoogle>Sign Up With Google</CustomButton>
			<form onSubmit={handleSubmit(onSubmithandler)}>
				<Alert />
				<input
					type="name"
					name="name"
					ref={register({ required: true })}
					placeholder="Name"
					onChange={onChangeHandler}
				/>
				<input
					type="email"
					name="email"
					ref={register({ required: true })}
					placeholder="email"
					onChange={onChangeHandler}
				/>
				<input
					type="password"
					name="password1"
					ref={register({ required: true })}
					placeholder="Password"
					onChange={onChangeHandler}
				/>
				<input
					type="password"
					name="password2"
					ref={register({ required: true })}
					placeholder="Re-Password"
					onChange={onChangeHandler}
				/>
				{errors.patientName && "Patient Name is require"}
				<CustomButton type="submit">Sign Up</CustomButton>
			</form>
			<h4 onClick={toggleHandler}>Already have an account ?</h4>
		</div>
	);
};

export default connect(null, { alertAction })(SignUpBlock);

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import CustomButton from "../custom-button/CustomButton";
import { signUpNewUser, signInWithGoogle } from "../../firebase/firebase.utils";
import Alert from "../utils/Alert";
import { alertAction } from "../../redux/alert/alertAction";
import { registerUser, authwithgoogle } from "../../redux/auth/auth.actions";
import { connect } from "react-redux";
import { MiniPulseLoaderSpinner } from "../utils/Spinner";

const SignUpBlock = ({
	toggleHandler,
	alertAction,
	registerUser,
	authwithgoogle,
}) => {
	const { register, handleSubmit, errors } = useForm();
	const [formData, setFormData] = useState(null);
	const [loading, setLoading] = useState(false);

	const onChangeHandler = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const onSubmithandler = async () => {
		setLoading(true);
		if (formData.password1 !== formData.password2) {
			alertAction("Password doesn't match", "danger");
			setLoading(false);
		} else {
			const signUp = await signUpNewUser(
				formData.email,
				formData.password1,
				formData.name
			);
			if (signUp) {
				registerUser({ ...signUp.response });
				alertAction(signUp.fireAlert.msg, signUp.fireAlert.type);
				setLoading(false);
			}
		}
	};

	const signInWithGoogleHandler = async () => {
		const signInInfo = await signInWithGoogle();
		authwithgoogle({ ...signInInfo.response });
		alertAction(signInInfo.fireAlert.msg, signInInfo.fireAlert.type);
	};
	return (
		<div className="auth-form-block">
			<h3>Sign Up</h3>
			<CustomButton signInWithGoogle onClick={signInWithGoogleHandler}>
				Sign Up With Google
			</CustomButton>
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
				<CustomButton type="submit">
					{loading ? <MiniPulseLoaderSpinner loading={loading} /> : "Sign Up"}
				</CustomButton>
			</form>
			<h4 onClick={toggleHandler}>Already have an account ?</h4>
		</div>
	);
};

export default connect(null, { alertAction, registerUser, authwithgoogle })(
	SignUpBlock
);

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import CustomButton from "../custom-button/CustomButton";
import { getUserData } from "../../redux/user/user.actions";
import { alertAction } from "../../redux/alert/alertAction";
import { connect } from "react-redux";
import {
	signinwithemailpassword,
	signInwithGoogle,
} from "../../firebase/firebase.utils";
import Alert from "../utils/Alert";

const SignInBlock = ({ toggleHandler, alertAction }) => {
	const { register, handleSubmit, errors } = useForm();
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});
	const onSubmithandler = async () => {
		const signIn = await signinwithemailpassword(
			formData.email,
			formData.password
		);
		alertAction(signIn.msg, signIn.type);
	};
	const onChangeHandler = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};
	const signInWithGoogleHandler = () => {
		signInwithGoogle();
	};
	return (
		<div className="auth-form-block">
			<Alert />
			<h3>Login</h3>
			<CustomButton signInWithGoogle onClick={signInWithGoogleHandler}>
				Sign In With Google
			</CustomButton>
			<form onSubmit={handleSubmit(onSubmithandler)}>
				<input
					type="email"
					name="email"
					ref={register({ required: true })}
					placeholder="Email"
					onChange={onChangeHandler}
				/>
				<input
					type="password"
					name="password"
					ref={register({ required: true })}
					placeholder="Password"
					onChange={onChangeHandler}
				/>
				{errors.patientName && "Patient Name is require"}
				<CustomButton type="submit">Login</CustomButton>
			</form>
			<h4 onClick={() => toggleHandler()}>Create an account ?</h4>
		</div>
	);
};

export default connect(null, { getUserData, alertAction })(SignInBlock);

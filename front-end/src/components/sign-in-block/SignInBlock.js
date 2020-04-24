import React, { useState } from "react";
import { useForm } from "react-hook-form";
import CustomButton from "../custom-button/CustomButton";
import { alertAction } from "../../redux/alert/alertAction";
import { connect } from "react-redux";
import {
	signinwithemailpassword,
	signInWithGoogle,
} from "../../firebase/firebase.utils";
import Alert from "../utils/Alert";
import { signIn, authwithgoogle } from "../../redux/auth/auth.actions";
import { MiniPulseLoaderSpinner } from "../utils/Spinner";

const SignInBlock = ({
	toggleHandler,
	alertAction,
	signIn,
	authwithgoogle,
}) => {
	const { register, handleSubmit, errors } = useForm();
	const [loading, setLoading] = useState(false);
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});
	const onSubmithandler = async () => {
		setLoading(true);
		const signInInfo = await signinwithemailpassword(
			formData.email,
			formData.password
		);
		console.log(signInInfo);

		if (signInInfo) {
			if (signInInfo.response) {
				const { email, uid } = signInInfo.response;
				signIn({ email, uid });
			}
			alertAction(signInInfo.fireAlert.msg, signInInfo.fireAlert.type);
			setFormData({ email: "", password: "" });
			setLoading(false);
		}
	};
	const onChangeHandler = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};
	const signInWithGoogleHandler = async () => {
		const signInInfo = await signInWithGoogle();
		authwithgoogle({ ...signInInfo.response });
		alertAction(signInInfo.fireAlert.msg, signInInfo.fireAlert.type);
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
				<CustomButton type="submit">
					{loading ? <MiniPulseLoaderSpinner loading={loading} /> : "Sign In"}
				</CustomButton>
			</form>
			<h4 onClick={() => toggleHandler()}>Create an account ?</h4>
		</div>
	);
};

export default connect(null, { alertAction, signIn, authwithgoogle })(
	SignInBlock
);

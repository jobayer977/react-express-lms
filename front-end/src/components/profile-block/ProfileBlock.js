import React from "react";
import "./profile-block.styles.css";
import CustomTitle from "../custom-title/CustomTitle";
import { connect } from "react-redux";

const ProfileBlock = ({ profile }) => {
	const { displayName, email, avatar, membership } = profile;
	return (
		<div className="dashboard-profile-block">
			<CustomTitle
				thin="Jobayer Hossain's Profile"
				tagline="Your Profile Info"
				medium
			/>
			<div className="dashboard-profile-content">
				<div className="dashboard-profile-card">
					<img src={avatar} alt="fd" />
					<div className="profile-content">
						<h4>{displayName}</h4>
						<p>{email}</p>
						<p>Membership {membership}</p>
					</div>
					{/* <CustomButton>Logout</CustomButton> */}
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	profile: state.profile.data,
});

export default connect(mapStateToProps, {})(ProfileBlock);

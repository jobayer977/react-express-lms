import React from "react";
import "./profile-block.styles.css";
import CustomTitle from "../custom-title/CustomTitle";
import CustomButton from "../custom-button/CustomButton";

const ProfileBlock = () => {
	return (
		<div className="dashboard-profile-block">
			<CustomTitle
				thin="Jobayer Hossain's Profile"
				tagline="Your Profile Info"
				medium
			/>
			<div className="dashboard-profile-content">
				<div className="dashboard-profile-card">
					<img
						src="https://secure.gravatar.com/avatar/f3d8b736f7d03ca76e6da1ae26fd7259?s=150&d=mm&r=g"
						alt="prifileimg"
					/>
					<div className="profile-content">
						<h4>Jobayer Hossain</h4>
						<p>Jobayerhossain977@Gmail.com</p>
						<p>Membership 4 years</p>
					</div>
					<CustomButton>Logout</CustomButton>
				</div>
			</div>
		</div>
	);
};

export default ProfileBlock;

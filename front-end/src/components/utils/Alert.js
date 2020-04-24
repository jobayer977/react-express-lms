import React, { Fragment } from "react";
import { connect } from "react-redux";
import "./alert.styles.css";

const Alert = ({ alerts }) => {
	return (
		<Fragment>
			{alerts !== null &&
				alerts.length > 0 &&
				alerts.map((alert) => (
					<div
						key={alert.id}
						className={`custom-alert custom-alert-${alert.alertType}`}>
						{alert.alertType === "success" ? (
							<div className="alert-icon">&#10003;</div>
						) : (
							<div className="alert-icon">&#10005;</div>
						)}
						{alert.msg}
					</div>
				))}
		</Fragment>
	);
};

const mapStateToProps = (state) => ({
	alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);

import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component, auth, children, ...rest }) => {
	return (
		<Route
			{...rest}
			render={({ location }) =>
				auth ? (
					children
				) : (
					<Redirect
						to={{
							pathname: "/auth",
							state: { from: location },
						}}
					/>
				)
			}
		/>
	);
};

const mapStateToProps = (state) => ({
	auth: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(PrivateRoute);

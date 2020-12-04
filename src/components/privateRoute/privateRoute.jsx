import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { LoginContainer } from '../../App';

const PrivateRoute = ({ component: Component, ...rest }) => {
	const { token, login, logout } = LoginContainer.useContainer();
	return (
		<Route
			{...rest}
			render={(props) =>
				token ? <Component {...props} /> : <Redirect to="/" />
			}
		/>
	);
};

export default PrivateRoute;

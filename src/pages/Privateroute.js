import React from 'react';
import { Redirect, Route } from 'react-router';
import useProvider from '../hook/useProvider';

const PrivateRoute = ({ children, ...rest }) => {
	const [, authentication] = useProvider();
	const [user, , , , , loading] = authentication;
	console.log(user, loading);

	if (loading) {
		<button type='button' class='' disabled>
			<svg
				class='animate-spin h-5 w-5 mr-3 ...'
				viewBox='0 0 24 24'
			></svg>
			Processing
		</button>;
	}

	return (
		<Route
			{...rest}
			render={({ location }) =>
				user?.email || user?.displayName ? (
					children
				) : (
					<Redirect
						to={{
							pathname: '/login',
							state: { from: location },
						}}
					></Redirect>
				)
			}
		></Route>
	);
};
export default PrivateRoute;

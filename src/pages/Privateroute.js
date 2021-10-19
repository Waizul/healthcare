import { Redirect, Route } from 'react-router-dom';
import useProvider from '../hook/useProvider';

const PrivateRoute = ({ children, ...rest }) => {
	const [, authentication] = useProvider();
	const [user, , , , , loading] = authentication;
	console.log(user, loading);
	// if (loading) return 'loading';

	return (
		<Route
			{...rest}
			render={({ location }) =>
				user.displayName ? (
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

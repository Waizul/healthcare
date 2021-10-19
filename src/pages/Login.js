import { getAuth } from '@firebase/auth';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useProvider from '../hook/useProvider';

const Login = () => {
	const [data, setData] = useState({});
	const location = useLocation();
	const history = useHistory();
	const redirect_uri = location.state?.from || '/';

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => setData(data);
	const { email, password } = data;

	const [, authentication] = useProvider();
	const [, signInUsingGoogle, , , signInUsingEmail, error] = authentication;

	const handleGoogleSignIn = () => {
		signInUsingGoogle().then((result) => {
			history.push(redirect_uri);
		});
	};

	const handleEmailSignIn = () => {
		signInUsingEmail(email, password).then((result) => {
			history.push(redirect_uri);
		});
	};

	return (
		<div className='mt-5'>
			<h2 className='text-green-700 text-2xl font-semibold text-center'>
				Login
			</h2>
			<div className='flex justify-center mt-2'>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className='flex flex-col gap-y-2 w-1/2'
				>
					<input
						className='border-4'
						placeholder='email'
						defaultValue=''
						{...register('email', { required: true })}
					/>
					{errors.email && (
						<span className='text-red-700'>
							This field is required
						</span>
					)}
					<input
						className='border-4'
						placeholder='password'
						defaultValue=''
						{...register('password', { required: true })}
					/>
					{errors.password && (
						<span className='text-red-700'>
							This field is required
						</span>
					)}
					<input
						onClick={handleEmailSignIn}
						className='font-bold bg-green-200 hover:bg-red-200'
						type='submit'
					/>
				</form>
				<p>{error}</p>
			</div>

			<div className='text-center  mt-5'>
				<button
					onClick={handleGoogleSignIn}
					className='text-white bg-red-600 px-5'
				>
					Sign In with Google
				</button>
				<p className='mt-5'>
					Not registered yet,{' '}
					<span className='text-blue-600'>
						<Link to='/register'>Register here</Link>
					</span>
				</p>
			</div>
		</div>
	);
};

export default Login;

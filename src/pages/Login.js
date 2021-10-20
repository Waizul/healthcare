import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useProvider from '../hook/useProvider';

const Login = () => {
	const [data, setData] = useState({});
	const location = useLocation();
	const history = useHistory();
	const redirect_uri = location.state?.from || '/';
	const [toggle, setToggle] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => setData(data);
	const { name, email, password } = data;

	const [, authentication] = useProvider();
	const [, signInUsingGoogle, , createUser, signInUsingEmail, error] =
		authentication;

	const handleCreateUser = () => {
		createUser(name, email, password);
		setToggle(false);
	};

	const handleGoogleSignIn = () => {
		signInUsingGoogle().then((result) => {
			history.push(redirect_uri);
		});
	};

	const handleEmailSignIn = () => {
		return signInUsingEmail(email, password).then((result) => {
			history.push(redirect_uri);
		});
	};

	const handleToggle = (e) => {
		setToggle(e.target.checked);
	};

	return (
		<div className='mt-5'>
			<h2 className='text-green-700 text-2xl font-semibold text-center'>
				{toggle ? 'Registration Form' : 'Login Form'}
			</h2>
			<div className='flex justify-center mt-2'>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className='flex flex-col gap-y-2 w-1/2'
				>
					{toggle && (
						<>
							{' '}
							<input
								className='border-4'
								placeholder='name'
								{...register('name', { required: true })}
							/>
							{errors.name && (
								<span className='text-red-700'>
									This field is required
								</span>
							)}
						</>
					)}
					<input
						className='border-4'
						placeholder='email'
						defaultValue=''
						{...register('email', {
							required: true,
							pattern:
								/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
						})}
					/>
					{errors.email && (
						<span className='text-red-700'>
							example@example.com
						</span>
					)}
					<input
						className='border-4'
						placeholder='password'
						defaultValue=''
						{...register('password', {
							required: true,
							minLength: 7,
						})}
					/>
					{errors.password && (
						<span className='text-red-700'>
							Minimum 7 character required
						</span>
					)}
					{toggle ? (
						<input
							onClick={handleCreateUser}
							className='font-bold bg-green-200 hover:bg-red-200'
							type='submit'
						/>
					) : (
						<input
							onClick={handleEmailSignIn}
							className='font-bold bg-green-200 hover:bg-red-200'
							type='submit'
						/>
					)}
					<p>
						<span>
							<input
								onClick={handleToggle}
								className=''
								type='checkbox'
								{...register('checked')}
							/>
						</span>
						<span>
							<label
								forHtml='check'
								className='text-red-500 px-2'
							>
								New User
							</label>
						</span>
					</p>
				</form>
				<p>{error}</p>
			</div>
			<div className='text-center  mt-5 mb-10'>
				<button
					onClick={handleGoogleSignIn}
					className='text-white bg-red-600 px-5'
				>
					{toggle ? 'Sign Up with Google' : 'Sign In with Google'}
				</button>
			</div>
		</div>
	);
};

export default Login;

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useProvider from '../hook/useProvider';

const Register = () => {
	const [data, setData] = useState({});
	const { name, email, password } = data;
	const [, authentication] = useProvider();
	const [, signInUsingGoogle, , createUser, , error] = authentication;
	console.log(name);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => {
		setData(data);
	};

	return (
		<div className='mt-5'>
			<h2 className='text-green-700 text-center text-2xl font-semibold'>
				Registration Form
			</h2>
			<div className='flex justify-center mt-5'>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className='flex flex-col gap-y-2 w-1/2'
				>
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

					<input
						className='border-4'
						placeholder='email'
						{...register('email', {
							required: true,
							pattern:
								/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
						})}
					/>
					{errors.email && (
						<span className='text-red-700'>
							This field is required
						</span>
					)}
					<input
						className='border-4'
						placeholder='password'
						{...register('password', { required: true })}
					/>
					{errors.password && (
						<span className='text-red-700'>
							This field is required
						</span>
					)}

					<input
						onClick={() => createUser(name, email, password)}
						className='font-bold bg-green-200 hover:bg-red-200'
						type='submit'
					/>
				</form>
				<p>{error}</p>
			</div>

			<div className='text-center  mt-5'>
				<button
					onClick={signInUsingGoogle}
					className='text-white bg-red-600 px-5'
				>
					Sign Up with Google
				</button>
				<p className='mt-5 mb-20'>
					Already registered,{' '}
					<span className='text-blue-600'>
						<Link to='/login'>Login here</Link>
					</span>
				</p>
			</div>
		</div>
	);
};

export default Register;

import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Register = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => console.log(data);

	return (
		<div>
			<div className='flex justify-center mt-10'>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className='flex flex-col gap-y-2 w-1/2'
				>
					<input
						className='border-4'
						placeholder='name'
						defaultValue=''
						{...register('name')}
					/>
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
						className='border-4'
						placeholder='address'
						defaultValue=''
						{...register('name')}
					/>
					<input
						className='border-4'
						placeholder='city'
						defaultValue=''
						{...register('name')}
					/>
					<input
						className='border-4'
						placeholder='country'
						defaultValue=''
						{...register('name')}
					/>
					<input
						className='font-bold bg-green-200 hover:bg-red-200'
						type='submit'
					/>
				</form>
			</div>

			<div className='text-center  mt-5'>
				<button className='text-white bg-red-600 px-5'>
					Sign Up with Google
				</button>
				<p className='mt-5'>
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

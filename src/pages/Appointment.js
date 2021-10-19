import React from 'react';
import { useForm } from 'react-hook-form';

const Appointment = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => {};
	return (
		<div>
			<div className='mt-5'>
				<h2 className='text-green-700 text-center text-2xl font-semibold'>
					Appointment Form
				</h2>
				<div className='flex justify-center mt-5'>
					<form
						onSubmit={handleSubmit(onSubmit)}
						className='flex flex-col gap-y-2 w-1/2'
					>
						<input
							className='border-4'
							placeholder='name'
							{...register('patient name', { required: true })}
						/>
						{errors.name && (
							<span className='text-red-700'>
								This field is required
							</span>
						)}
						<input
							className='border-4'
							placeholder='test name'
							{...register('test', { required: true })}
						/>
						{errors.test && (
							<span className='text-red-700'>
								This field is required
							</span>
						)}
						<input
							className='border-4'
							placeholder='time'
							{...register('time', { required: true })}
						/>
						{errors.time && (
							<span className='text-red-700'>
								This field is required
							</span>
						)}
						<input
							className='font-bold bg-green-200 hover:bg-red-200'
							type='submit'
						/>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Appointment;

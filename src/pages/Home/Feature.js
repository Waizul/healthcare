import React from 'react';
import ambulance from './../../image/ambulance.png';
import equipment from './../../image/medical-equipment.png';
import img from './../../image/doctor.png';
import service from './../../image/medical-services.png';
const Feature = () => {
	return (
		<div className='mt-5'>
			<div className='mb-5 text-center'>
				<h2 className='text-green-700 text-2xl'>Why choose us</h2>

				<p>We provide the best care for you and for your health</p>
			</div>
			<div
				className='grid sm:grid-rows-1 grid-rows-3 
		 gap-10 grid-flow-col mx-20'
			>
				<div className='flex flex-col content-center'>
					<img src={img} className='w-2/3' alt='' />
					<h2 className='text-gray-800 font-bold'>
						Professional Doctors
					</h2>
					<p>
						{' '}
						Our doctors concerned with promoting, maintaining or
						restoring health through diagnosis.
					</p>
				</div>

				<div className='flex flex-col content-center'>
					<img src={equipment} className='w-2/3' alt='' />
					<h2 className='text-gray-800 font-bold'>
						Newest Equipment
					</h2>
					<p>
						Ultrasound, Scanners, Scalpels, Patient monitors.
						Defibrillators. Surgical tables.
					</p>
				</div>

				<div className='flex flex-col content-center'>
					<img src={ambulance} className='w-2/3' alt='' />
					<h2 className='text-gray-800 font-bold'>Ambulance</h2>
					<p>
						Transfers immobile patients to and from their hospital
						appointments.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Feature;

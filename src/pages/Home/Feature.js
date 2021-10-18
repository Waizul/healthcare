import React from 'react';
import ambulance from './../../image/ambulance.png';
import equipment from './../../image/medical-equipment.png';
import img from './../../image/doctor.png';
import service from './../../image/medical-services.png';
const Feature = () => {
	return (
		<div className=''>
			<div className='mb-5 text-center'>
				<h2 className=''>Why choose us</h2>
				<p>---------</p>
				<p>We provide the best care for you and for your health</p>
			</div>
			<div className='grid grid-rows-1 grid-flow-col mx-20'>
				<div>
					<img src={ambulance} className='w-2/3' alt='' />
					<h2>Ambulance</h2>
					<p>fksdlfjusdofiopsk</p>
				</div>
				<div className='flex flex-col content-center'>
					<div>
						<img src={equipment} className='w-2/3' alt='' />
					</div>

					<div>
						<h2>Ambulance</h2>
						<p>fksdlfjusdofiopsk</p>
					</div>
				</div>
				<div>
					<img src={img} className='w-2/3' alt='' />
					<h2>Ambulance</h2>
					<p>fksdlfjusdofiopsk</p>
				</div>
				<div>
					<img src={service} className='w-2/3' alt='' />
					<h2>Ambulance</h2>
					<p>fksdlfjusdofiopsk</p>
				</div>
			</div>
		</div>
	);
};

export default Feature;

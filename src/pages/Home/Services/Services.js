import React from 'react';
import useProvider from '../../../hook/useProvider';
import Service from './Service';

const Services = () => {
	const [[data]] = useProvider();

	return (
		<div className='mx-10 my-16 mx-20'>
			<h2 className='text-2xl font-bold mb-2'>Our Services</h2>
			<div className='grid  sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center'>
				{data?.map((service) => (
					<Service service={service}></Service>
				))}
			</div>
		</div>
	);
};

export default Services;

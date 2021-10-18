import React from 'react';
import useProvider from '../../../hook/useProvider';
import useService from '../../../hook/useService';
import Service from './Service';

const Services = () => {
	const [services] = useService();
	console.log(services);
	return (
		<div className='mx-10 my-16'>
			<h2 className='text-2xl font-bold border-b-2 border-red-800'>
				Our Services
			</h2>
			<div className='grid grid-cols-4 gap-10'>
				{services?.map((service) => (
					<Service service={service}></Service>
				))}
			</div>
		</div>
	);
};

export default Services;

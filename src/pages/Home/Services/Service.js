import React from 'react';
import { Link } from 'react-router-dom';

const Service = (props) => {
	const { id, name, description, img } = props.service;
	const url = `/service/${id}`;
	return (
		<div className='transform hover:scale-110 motion-reduce:transform-none hover:shadow-2xl'>
			<img src={img} className='img-100' alt='' />

			<div className='pl-2'>
				<h2 className='font-semibold '>{name}</h2>
				<p>{description.slice(0, 50)}</p>
			</div>
			<div className='pl-2'>
				<Link to={url}>
					<button className='bg-green-700 px-5 text-white rounded hover:bg-red-800'>
						Detail
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Service;

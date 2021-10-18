import React from 'react';

const Service = (props) => {
	const { name, description, img } = props.service;
	console.log(name);
	return (
		<div className='transform hover:scale-110 motion-reduce:transform-none hover:shadow-2xl'>
			<img src={img} className='img-100' alt='' />

			<div>
				<h2>{name}</h2>
				<p>{description.slice(0, 50)}</p>
			</div>
		</div>
	);
};

export default Service;

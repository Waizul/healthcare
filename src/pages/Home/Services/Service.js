import React from 'react';
import { useHistory } from 'react-router';

const Service = (props) => {
	const history = useHistory();

	const { id, name, description, img } = props.service;
	const url = `/service/${id}`;

	const handleDetail = () => {
		history.push(url);
	};

	return (
		<div className='transform hover:scale-110 motion-reduce:transform-none hover:shadow-2xl'>
			<img src={img} className='img-100' alt='' />

			<div className='pl-2'>
				<h2 className='font-semibold '>{name}</h2>
				<p>{description.slice(0, 50)}</p>
			</div>
			<div className='pl-2'>
				<button
					onClick={handleDetail}
					className='bg-green-700 px-5 text-white rounded hover:bg-red-800'
				>
					Detail
				</button>
			</div>
		</div>
	);
};

export default Service;

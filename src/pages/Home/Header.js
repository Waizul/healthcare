import React from 'react';
import banner from './../../image/banner.jpg';
const Header = () => {
	return (
		<div className='max-h-8'>
			<img src={banner} height='300px' className='bg-cover' alt='' />
		</div>
	);
};

export default Header;

import React from 'react';
import banner from './../../image/banner.jpg';
const Header = () => {
	return (
		<div>
			<div className='grid sm:grid-cols-1 md:grid-cols-6 lg:grid-cols-12  mr-5 pl-10 mt-5'>
				<div className='col-span-9'>
					<img src={banner} alt='' />
				</div>

				<div className='table'>
					<h2>Open</h2>
					<p>9am</p>
					<p>9am</p>
					<p>9am</p>
					<p>9am</p>
					<p id='off'>Off</p>
					<p>9am</p>
					<p>9am</p>
				</div>
				<div className='table'>
					<h2>Close</h2>
					<p>9pm</p>
					<p>9pm</p>
					<p>9pm</p>
					<p>9pm</p>
					<p id='off'>Off</p>
					<p>9pm</p>
					<p>9pm</p>
				</div>
				<div className='table'>
					<h2>Day</h2>
					<p>Monday</p>
					<p>Tuesday</p>
					<p>Wednesday</p>
					<p>Thursday</p>
					<p id='off'>Friday</p>
					<p>Saturday</p>
					<p>Sunday</p>
				</div>
			</div>
		</div>
	);
};

export default Header;

// grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ml-10 pt-5

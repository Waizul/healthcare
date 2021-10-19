import React from 'react';
import ultragram from './../../image/ultragram.jpg';
const About = () => {
	return (
		<div className='mb-10'>
			<h1 className='text-2xl mb-5 ml-10 font-bold'>About Us</h1>
			<div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ml-10'>
				<img src={ultragram} alt='' />
				<div>
					<p>
						Digital Diagnostic Center started its journey with the
						vision of taking the health care services into a new
						height through providing the most accurate and reliable
						test results to all its customers and caring the
						patients at the top of its values. We are committed to
						provide the best in class diagnostic services to all our
						customers with the ground breaking technologies
						combining with a dedicated team of professionals. We aim
						to support the physicians and other health care service
						providers with the power of diagnosis for a timely
						detection of the illness of their patients.{' '}
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;

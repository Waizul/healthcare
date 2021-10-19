import React from 'react';

const Footer = () => {
	return (
		<div className='bg-gray-900 text-white  pt-10'>
			<div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pl-20 pb-5'>
				<div>
					<p>Contact Us</p>
					<p>info@ddc.com</p>
					<p>Call: +111111111</p>
					<p>call: +222222222</p>
					<p>Farmgate, Dhaka</p>
				</div>
				<div>
					<p>Quick Link</p>
					<p>About us</p>
					<p>Blog</p>
					<p>Faq</p>
					<p>Our expertize </p>
				</div>
				<div>
					<p>Our Services</p>
					<p>Blood Test</p>
					<p>X-Ray</p>
					<p>Ultrasonogram</p>
					<p>Ambulance</p>
				</div>
				<div>
					<p>Feedback</p>
					<p>Name</p>
					<p>------------</p>
					<p>Phone</p>
					<p>------------</p>
				</div>
			</div>
			<div className='border-t-2 py-1 text-center'>
				<p>Copyright reserved to DDC</p>
			</div>
		</div>
	);
};

export default Footer;

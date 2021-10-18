import React from 'react';
import banner from './../../image/banner.jpg';
const Header = () => {
	return (
		<div className='flex gap-x-8'>
			<img src={banner} className='w-2/3' alt='' />
			<div>
				<table class='table-fixed w-2/3'>
					<thead className='text-blue-500'>
						<tr>
							<th class='w-1/2'>Opening</th>
							<th class='w-1/2'>Closing</th>
							<th class='w-1/4'>Days</th>
						</tr>
					</thead>
					<tbody className='text-green-500'>
						<tr>
							<td>9am</td>
							<td>9pm</td>
							<td>Monday</td>
						</tr>
						<tr>
							<td>9am</td>
							<td>9pm</td>
							<td>Tuesday</td>
						</tr>
						<tr>
							<td>9am</td>
							<td>9pm</td>
							<td>Wednesday</td>
						</tr>
						<tr>
							<td>9am</td>
							<td>9pm</td>
							<td>Thursday</td>
						</tr>
						<tr className='text-red-500'>
							<td>Off</td>
							<td>Off</td>
							<td>Friday</td>
						</tr>
						<tr>
							<td>9am</td>
							<td>9pm</td>
							<td>Saturday</td>
						</tr>
						<tr>
							<td>9am</td>
							<td>9pm</td>
							<td>Sunday</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Header;

import { useParams } from 'react-router';
import useProvider from '../hook/useProvider';

const ServiceDetail = () => {
	const { serviceId } = useParams();
	const [[data]] = useProvider();

	const matchedService = data.find((service) => service.id == serviceId);

	const { name, description, img } = matchedService;
	return (
		<div className='w-2/3 mx-20 my-10'>
			<div>
				<img src={img} className='' alt='' />
			</div>

			<div>
				<h2 className='text-gray-700 font-bold text-2xl'>{name}</h2>
				<p>{description}</p>
			</div>
		</div>
	);
};

export default ServiceDetail;

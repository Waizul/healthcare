import { useEffect, useState } from 'react';

const useService = () => {
	const [services, setServices] = useState([]);
	console.log(services);

	useEffect(() => {
		fetch('./healthcare.json')
			.then((res) => res.json())
			.then((data) => setServices(data));
	}, []);

	return [services];
};
export default useService;

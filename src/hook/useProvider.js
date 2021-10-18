import { useContext } from 'react';
import { allContext } from '../context/ProvideAll';

const useProvider = () => {
	return useContext(allContext);
};
export default useProvider;

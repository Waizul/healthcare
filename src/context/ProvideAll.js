import { createContext } from 'react';
import useFirebase from '../hook/useFirebase';
import useService from '../hook/useService';

export const allContext = createContext();

const ProvideAll = ({ children }) => {
	const data = useService();
	const authentication = useFirebase();
	console.log(authentication);

	return (
		<allContext.Provider value={[data, authentication]}>
			{children}
		</allContext.Provider>
	);
};
export default ProvideAll;

import { createContext } from 'react';
import useService from '../hook/useService';

export const allContext = createContext();

const ProvideAll = ({ children }) => {
	const data = useService();

	return <allContext.Provider value={data}>{children}</allContext.Provider>;
};
export default ProvideAll;

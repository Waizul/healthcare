import { useState } from 'react';
import initializeFirebase from '../firebase/initialize.firebase';
import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	signOut,
	onAuthStateChanged,
} from 'firebase/auth';
initializeFirebase();

const useFirebase = () => {
	const [user, setUser] = useState({});
	const [error, setError] = useState('');

	const auth = getAuth();
	const googleProvider = new GoogleAuthProvider();

	const signInUsingGoogle = () => {
		signInWithPopup(auth, googleProvider)
			.then((result) => {
				const user = result.user;
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				const email = error.email;
				setError(errorCode, errorMessage, email);
			});
	};

	const logOut = () => {
		const auth = getAuth();
		signOut(auth)
			.then(() => {})
			.catch((error) => {
				setError(error);
			});
	};

	onAuthStateChanged(auth, (user) => {
		if (user) {
			setUser(user);
		} else {
			setError('User is signed out');
		}
	});
	return { user, signInUsingGoogle, logOut };
};

export default useFirebase;

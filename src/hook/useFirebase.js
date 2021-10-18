import { useState } from 'react';
import initializeFirebase from '../firebase/initialize.firebase';
import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	signOut,
	onAuthStateChanged,
	createUserWithEmailAndPassword,
} from 'firebase/auth';
initializeFirebase();

const useFirebase = () => {
	const [user, setUser] = useState({});
	const [error, setError] = useState('');
	console.log(user);
	const auth = getAuth();
	const googleProvider = new GoogleAuthProvider();

	const createUser = (email, password) => {
		console.log(email, password);
		createUserWithEmailAndPassword(auth, email, password)
			.then((result) => {
				const user = result.user;
				setUser(user);
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				setError(errorCode, errorMessage);
			});
	};
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
		signOut(auth)
			.then(() => {
				setUser({});
			})
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
	return [user, signInUsingGoogle, logOut, createUser];
};

export default useFirebase;

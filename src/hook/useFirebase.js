import { useEffect, useState } from 'react';
import initializeFirebase from '../firebase/initialize.firebase';
import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	signOut,
	onAuthStateChanged,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
} from 'firebase/auth';
initializeFirebase();

const useFirebase = () => {
	const [user, setUser] = useState({});
	const [error, setError] = useState('');
	console.log(user);
	const auth = getAuth();
	const googleProvider = new GoogleAuthProvider();

	const createUser = (name, email, password) => {
		console.log(name, email, password);
		createUserWithEmailAndPassword(auth, email, password)
			.then((result) => {
				const user = result.user;
				setUser(user);
				updateUser(name);
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				setError(errorCode, errorMessage);
			});
	};

	const updateUser = (name) => {
		console.log(name);
		updateProfile(auth.currentUser, {
			displayName: name,
		}).then(() => {});
	};

	const signInUsingEmail = (email, password) => {
		signInWithEmailAndPassword(auth, email, password)
			.then((result) => {
				const user = result.user;
				// setUser(user);
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

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
				console.log(user);
			} else {
				setError('User is signed out');
			}
		});
	}, []);

	return [
		user,
		signInUsingGoogle,
		logOut,
		createUser,
		signInUsingEmail,
		updateUser,
	];
};

export default useFirebase;

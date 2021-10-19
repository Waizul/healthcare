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
	const [loading, setLoading] = useState(true);
	console.log(user);
	const auth = getAuth();

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
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password)
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				setError(errorCode, errorMessage);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	const signInUsingGoogle = () => {
		const googleProvider = new GoogleAuthProvider();
		setLoading(true);
		return signInWithPopup(auth, googleProvider)
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				setError(errorCode, errorMessage);
			})
			.finally(() => {
				setLoading(false);
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
		loading,
		error,
	];
};

export default useFirebase;

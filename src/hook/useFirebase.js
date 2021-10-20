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

	const auth = getAuth();

	const createUser = (name, email, password) => {
		console.log(name, email, password);
		createUserWithEmailAndPassword(auth, email, password)
			.then((result) => {
				const newUser = result.user;
				const addedUser = { ...newUser, user };
				setUser(addedUser);
				updateUser(name);
				console.log(user);
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
		setLoading(true);
		const googleProvider = new GoogleAuthProvider();

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
		setLoading(true);
		signOut(auth)
			.then(() => {
				setUser({});
			})
			.catch((error) => {
				setError(error);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	useEffect(() => {
		setLoading(true);
		onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
				console.log(user);
			} else {
				setUser({});
			}
			setLoading(false);
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

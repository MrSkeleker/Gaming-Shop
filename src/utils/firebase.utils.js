import { initializeApp } from 'firebase/app';
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyAh7QuspR744wvrhInruhTWDEOZ53b-b-M',
	authDomain: 'video-games-shop-db.firebaseapp.com',
	projectId: 'video-games-shop-db',
	storageBucket: 'video-games-shop-db.appspot.com',
	messagingSenderId: '266546690936',
	appId: '1:266546690936:web:6870576bf5c45bcf6b668d',
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
	prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
	signInWithPopup(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);
    if(!userSnapshot.exists()) {
		const {displayName, email} = userAuth;
		const createdAt = new Date();

		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt
			});
		}
		catch(error) {
			console.log('Error creating the user', error.message);
		}
	}

	return userDocRef;
}
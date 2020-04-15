import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { firebaseConfig } from "../config/config";

//Init APP
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
const firestore = firebase.firestore();

export const fireAlert = { msg: "", type: "" };
const firebaseAlert = (msg, type) => {
	fireAlert.msg = msg;
	fireAlert.type = type;
};

//Sign in with GOOGLE popup
const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = async () => {
	try {
		const res = await firebase.auth().signInWithPopup(provider);
		const response = {
			uid: res.user.uid,
			displayName: res.user.displayName,
			email: res.user.email,
			avatar: res.user.photoURL,
		};
		firebaseAlert("Logged In", "success");
		return { fireAlert, response };
	} catch (e) {
		firebaseAlert(e.message, "danger");
		return { fireAlert };
	}
};

//Sign in with email and password
export const signinwithemailpassword = async (email, password) => {
	try {
		const res = await firebase
			.auth()
			.signInWithEmailAndPassword(email, password);
		const response = {
			uid: res.user.uid,
			email: res.user.email,
		};
		firebaseAlert("Logged In", "success");
		return { fireAlert, response };
	} catch (e) {
		firebaseAlert(e.message, "danger");
		return { fireAlert };
	}
};

//Sign Up with email and password
export const signUpNewUser = async (email, password, name) => {
	try {
		const res = await firebase
			.auth()
			.createUserWithEmailAndPassword(email, password);
		const newUser = {
			...res.user,
			displayName: name,
		};
		const response = {
			uid: res.user.uid,
			displayName: name,
			email: res.user.email,
			avatar: res.user.photoURL,
		};
		createProfileDocument(newUser);
		firebaseAlert("Account created", "success");
		return { fireAlert, response };
	} catch (err) {
		firebaseAlert(err.message, "danger");
		return { fireAlert };
	}
};

// Store To Database
export const createProfileDocument = async (userAuth) => {
	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email, photoURL } = userAuth;
		const createdAt = new Date();
		try {
			await userRef.set({
				displayName,
				email,
				photoURL,
				createdAt,
			});
		} catch (error) {
			console.log(error.message);
		}
	}
	return userRef;
};

export default firebase;

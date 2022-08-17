import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
	apiKey: "AIzaSyDBtGR-EmvY3yYxocwVfJNGqItW8rGtFfw",
	authDomain: "linkedin-clone-8bcb3.firebaseapp.com",
	projectId: "linkedin-clone-8bcb3",
	storageBucket: "linkedin-clone-8bcb3.appspot.com",
	messagingSenderId: "598335478573",
	appId: "1:598335478573:web:829ce4331a210ea0c6d1a4"
};

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage, app };
export default db;
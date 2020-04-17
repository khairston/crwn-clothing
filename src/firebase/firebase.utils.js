import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDdmB4pMb2LxiJqwT1KPM1g4lWbpO85GQU",
    authDomain: "crwn-db-323f7.firebaseapp.com",
    databaseURL: "https://crwn-db-323f7.firebaseio.com",
    projectId: "crwn-db-323f7",
    storageBucket: "crwn-db-323f7.appspot.com",
    messagingSenderId: "28597840687",
    appId: "1:28597840687:web:e13593545383388e2e4fda",
    measurementId: "G-DLGP1T4LWM"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

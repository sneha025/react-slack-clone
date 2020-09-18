import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAXmXeqz7fDmTxfY_dbauuGkxcbeiFAagM",
    authDomain: "react-slack-clone-ae90b.firebaseapp.com",
    databaseURL: "https://react-slack-clone-ae90b.firebaseio.com",
    projectId: "react-slack-clone-ae90b",
    storageBucket: "react-slack-clone-ae90b.appspot.com",
    messagingSenderId: "320847078068",
    appId: "1:320847078068:web:0730699da07b00f611ade1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();

export const signInWithGoogle = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(googleProvider);
};
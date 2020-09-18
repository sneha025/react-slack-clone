import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAXmXeqz7fDmTxfY_dbauuGkxcbeiFAagM',
  authDomain: 'react-slack-clone-ae90b.firebaseapp.com',
  databaseURL: 'https://react-slack-clone-ae90b.firebaseio.com',
  projectId: 'react-slack-clone-ae90b',
  storageBucket: 'react-slack-clone-ae90b.appspot.com',
  messagingSenderId: '320847078068',
  appId: '1:320847078068:web:0730699da07b00f611ade1',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const signOut = () => {
  auth.signOut();
};
export const firestore = firebase.firestore();
export const signInWithGoogle = () => {
  //google provider
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  // ask user to select gmail account in pop up window
  auth.signInWithPopup(googleProvider);
};

export const createOrGetUserProfileDocument = async (user) => {
  if (!user) return;
  const userRef = firestore.doc(`users/${user.uid}`);

  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { dispalyName, email, photoUrl } = user;

    try {
      const user = {
        display_name: dispalyName,
        email,
        photo_url: photoUrl,
        created_at: new Date(),
      };
      await userRef.set(user);
    } catch (error) {
      console.log('error', error);
    }
  }
  return getUserDocument(user.uid);
};

export const getUserDocument = async (uid) => {
  if (!uid) return null;

  try {
    const userDocument = await firestore.collection('users').doc(uid);
    return userDocument;
  } catch (error) {
    console.error('Error fetching user', error.message);
  }
};

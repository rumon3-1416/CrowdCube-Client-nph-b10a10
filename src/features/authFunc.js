import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';

import auth from '../services/firebase.init';

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const facebookProvider = new FacebookAuthProvider();

// Email-Pass Sign Up
export const emailPassSignUp = (email, pass) => {
  return createUserWithEmailAndPassword(auth, email, pass);
};

// Email-Pass Sign In
export const emailPassSignIn = (email, pass) => {
  return signInWithEmailAndPassword(auth, email, pass);
};

// Google Sign In
export const googleSignIn = () => {
  return signInWithPopup(auth, googleProvider);
};

// Github Sign In
export const githubSignIn = () => {
  return signInWithPopup(auth, githubProvider);
};

// Facebook Sign In
export const facebookSignIn = () => {
  return signInWithPopup(auth, facebookProvider);
};

// Update Profile
export const updateUserProfile = (user = auth.currentUser, updateObj) => {
  return updateProfile(user, updateObj);
};

// Sign Out
export const signOutUser = () => {
  return signOut(auth);
};

// Reset Password
export const resetPassword = email => {
  return sendPasswordResetEmail(auth, email);
};

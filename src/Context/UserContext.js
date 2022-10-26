import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

export const AuthContext = createContext();

const auth = getAuth(app);

const UserContext = ({ children }) => {
    const [user, setUser] = useState({});

    const [loading, setLoading] = useState(true);


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        }
    }, []);

    const logOut = () => {
        return signOut(auth);
    };

    const signinWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);
    };



    const authInfo = { auth, user, createUser, signIn, logOut, signinWithGoogle, loading };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;
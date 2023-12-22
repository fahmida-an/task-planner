import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from "firebase/auth"
import { createContext, useEffect, useState } from "react";

import app from "../firebase/firebase.config";
export const AuthContext = new createContext(null)
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
             displayName:name, photoURL: photo
         })
         
     }
     const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('user', currentUser);
            setLoading(false)
        });
        return () => {
            return unsubscribe();
        }
    })
    const authInfo ={
        user,
        loading,
        createUser,
        logInUser,
        updateUserProfile,
        logOut,      

    }

    return (
        <AuthContext.Provider value ={authInfo}>
        {children}
    </AuthContext.Provider>
    );
};

export default AuthProvider;
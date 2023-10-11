import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js'

const firebaseConfig = {
  apiKey: "AIzaSyDsv-4pqhdeQGsUbX6QLgAlaVj0ykkBV7E",
  authDomain: "fire-dd524.firebaseapp.com",
  projectId: "fire-dd524",
  storageBucket: "fire-dd524.appspot.com",
  messagingSenderId: "371394472939",
  appId: "1:371394472939:web:1ecc8b159dc2a3c40d87ae",
  measurementId: "G-NMLSX4N9KL"
};

initializeApp(firebaseConfig);
const auth = getAuth()

export const signin = async ({email, password})=>{
    try {
        const {user} = await signInWithEmailAndPassword(auth,email,password)
        const token = await user.getIdToken()
        return {
            success: true,
            token
        }
    }
    catch(error)
    {
        return {
            success: false,
            error
        }
    }
}

export const guard = (callback)=>{
    onAuthStateChanged(auth,(user)=>{
        if(user) return true
        location.href = callback
    })
}

export const logout = async ()=>{
    try {
        await signOut(auth)
        return {
            success: true
        }
    }
    catch(error)
    {
        return {
            success: false,
            error
        }
    }
}

export const signup = async (user)=>{
    try {
        const {user: {uid}} = await createUserWithEmailAndPassword(auth,user.email,user.password)
        return {
            success: true,
            user: {
                id: uid
            }
        }
    }
    catch(error)
    {
        return {
            success: false,
            error
        }
    }
}
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js'

const firebaseConfig = {
    apiKey: "AIzaSyCcSjNC71G_CXbkiYqNrNS2f3FdzeOo6MI",
    authDomain: "fire-39df1.firebaseapp.com",
    projectId: "fire-39df1",
    storageBucket: "fire-39df1.appspot.com",
    messagingSenderId: "1042513456565",
    appId: "1:1042513456565:web:6e1d08cdd3a57beda57dfc",
    measurementId: "G-VYG664Z795"
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
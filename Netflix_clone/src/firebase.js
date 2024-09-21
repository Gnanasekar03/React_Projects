// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import {addDoc, collection, getFirestore} from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyDj0X0G9xVPs30Ja4mD9FIB1TrGE10uwBM",
  authDomain: "netflix-clone-c00ae.firebaseapp.com",
  projectId: "netflix-clone-c00ae",
  storageBucket: "netflix-clone-c00ae.appspot.com",
  messagingSenderId: "864982338949",
  appId: "1:864982338949:web:5c046770dcd2db3dcf88ec",
  measurementId: "G-M3ZKJ90H2K"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth(app);
const db=getFirestore(app)

const signup=async (name,email,password)=>{
    try {
        const res = await createUserWithEmailAndPassword(auth,email,password);
        const user=res.user;
        await addDoc(collection(db,"user"),{
            uid:user.uid,
            name,
            authProvider:"local",
            email,
        })
        toast.success("SignedUp sucessfully")
    } catch (error) {
        console.log(error)
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const login= async (email,password)=>{
    try {
        await signInWithEmailAndPassword(auth,email,password);
        toast.success("Login Sucessfully")
    } catch (error) {
        console.log(error)
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const logout =()=>{
    signOut(auth)
}


export {auth,db,login,signup,logout}
//import { GoogleAuthProvider } from "firebase/auth/web-extension";
import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { FirebaseAuth } from "./firebase";



const googleProvider = new GoogleAuthProvider();



export const signInWithGoogle = async() => {
    try{
        const result = await signInWithPopup( FirebaseAuth, googleProvider );
        const credentials = GoogleAuthProvider.credentialFromResult( result );


        const { displayName, email, photoURL, uid } = result.user;
        
        return {
            ok: true,
            displayName, email, photoURL, uid
        }

    }
    catch( error ){
        console.log( error );
        const errorCode = error.code;
        const errorMessage = error.Message;
        return {
            ok: false,
            erorrMessage,


        }
    }
}

export const registerUserWithEmailPassword = async ( displayName, email, password ) => {
    try{
        const resp = await createUserWithEmailAndPassword( FirebaseAuth, email, password );
        const { uid, photoURL } = resp.user;
        console.log(resp);
        await updateProfile( FirebaseAuth.currentUser, { displayName } );
        return {
            ok: true,
            uid, photoURL, email, displayName
        }
    }   
    catch(error){
        console.log(error.message);
        return { ok: false, errorMessage: error.message }
    }
}

export const loginWithEmailPassword = async( email, password) => {
    try {
        const resp = await signInWithEmailAndPassword( FirebaseAuth, email, password );
        const { uid, photoURL, displayName } = resp.user;
        return {
            ok: true,
            uid, photoURL, displayName
        }
    }
    catch( error ) {
        console.log(error);
        return {
            ok:false, 
            errorMessage: error.message 
        }
    }
}

export const logoutFirebase = async () => {
    return await FirebaseAuth.signOut();
}
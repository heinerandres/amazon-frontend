import { useDispatch, useSelector } from "react-redux"
import { checkingCredentials, Login, Logout, onError } from "../store/auth/authSlice";
import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, signInWithGoogle } from "../firebase/providers";

export const useAuthStore = () => {

    const dispatch = useDispatch();

    const login = async( email, password ) => {
        try {
            dispatch(checkingCredentials());
            const result = await loginWithEmailPassword( email, password );
            console.log(result);
            if( !result.ok ) return dispatch( Logout( result.errorMessage ));
            dispatch( Login( result ));
        }
        catch(error){
            dispatch( onError("Error en el Api"));
        }
    }

    const googleSignIn = async() => {

        try {
            dispatch(checkingCredentials());
            const result = await signInWithGoogle();
            if( !result.ok ) return dispatch( Logout( result.erorrMessage ) );
            dispatch (Login( result ));
        }
        catch(error){
            console.log(error);
            dispatch( onError("Error en el Api"));
        }
    }

    const createUserWithEmail = async ( displayName, email, password ) => {
        dispatch(checkingCredentials());
        const { ok, uid, photoURL, errorMessage } = await registerUserWithEmailPassword( displayName, email, password );
        console.log('ok', ok);
        console.log('errormessage', errorMessage);
        if( !ok ) return dispatch( Logout( errorMessage ));

        dispatch( Login({ uid, displayName, email, photoURL }));
    }

    const startLogout = async() => {
        await logoutFirebase();
        dispatch(Logout());
    }
    


  return {
    login,
    googleSignIn,
    createUserWithEmail,
    startLogout,

  }
}

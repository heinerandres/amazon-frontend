import { Navigate, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "../firebase/firebase";
import { Login, Logout } from "../store/auth/authSlice";
import { EcommerceRoutes } from "./EcommerceRoutes";
import { AuthRoutes } from "./AuthRoutes";


export const AppRouter = () => {

  const { status } = useSelector( state => state.auth );
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged( FirebaseAuth, async( user ) => {
      if( !user ) return dispatch( Logout());
      const { uid, email, displayName, photoURL } = user;
      dispatch( Login({ uid, email, displayName, photoURL }));
    });
  
  }, []);

  return (
    <Routes>
      {
        (status === 'authenticated')
        ? <Route path="/*" element={ <EcommerceRoutes/> }/>
        : <Route path="/auth/*" element={ <AuthRoutes/>}/>
      }
      <Route path="/*" element={<Navigate to="/auth/login"/>}/>
    </Routes>
  )
}

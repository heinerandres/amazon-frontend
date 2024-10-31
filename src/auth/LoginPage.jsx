import React, { useMemo } from 'react'
import { useForm } from '../util/useForm'
import { useAuthStore } from '../hooks/useAuthStore';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Alert, Grid } from '@mui/material';

export const LoginPage = () => {

  const navigate = useNavigate();

  const { login, googleSignIn } = useAuthStore();

  const { status, errorMessage } = useSelector(state => state.auth)

  const { email, password, onInputChange } = useForm({
    email: '',
    password: ''
  });

  const isAuthenticating = useMemo( () => status === 'checking', [status]);

  const onSubmit = ( event ) => {
    event.preventDefault();
    login( email, password );

  }

  const onGoogleSignIn = () => {
    googleSignIn();
  }

  const handleCrearCuenta = () => {
    navigate("/auth/Register");
  }

  return (
    <div className="div-login">
      <div className="wrapper-login">
        <div className="login">
          <div className="div-logo-login">
            <img src="../img/logo-login.png"></img>
          </div>
          <form className="contenido-login" onSubmit={ onSubmit }>
            <div className="titulo-login">
              <label>Iniciar sesión</label><br></br>
              <label className='text-login'>Dirección de correo electrónico</label>
              {/*////////////////////////////////CORREO */}
              <input 
              className="input-text-login" 
              type='email' 
              name="email" 
              required={ true }
              value={ email }
              onChange={ onInputChange }
              />
              <label className='text-login'>Contraseña</label>
              {/*////////////////////////////////CONTRASEÑA */}
              <input 
              className="input-text-login" 
              type='password'
              name="password" 
              required={ true }
              value={ password }
              onChange={ onInputChange }/>

              <Grid display={ !!errorMessage ? '': 'none' } >
                <Alert className='alert-login' severity='error'>{ errorMessage }</Alert>
              </Grid>


              {/*////////////////////////////////CONTINUAR */}
              <input 
              className="btn-form-login" 
              value="Continuar" 
              type='submit'  
              disabled={ isAuthenticating }/><br></br>
              {/*////////////////////////////////GOOGLE */}
              <input 
              type="button" 
              className='btn-google' 
              onClick={ onGoogleSignIn } 
              disabled={ isAuthenticating } 
              value="Iniciar con Google"/>
            </div>
          </form>
          <div className='wrapper-separador-registrarse'>
            <div className='bloque1'></div>
            <div className='bloque2'>
              ¿Eres nuevo en Amazon?
            </div>
            <div className='bloque3'></div>
          </div>
          <div className="wrapper-btn-registrarse">
            {/*////////////////////////////////REGISTRARSE */}
            <input 
            type="button" 
            value="Crear tu cuenta de Amazon"
            disabled={ isAuthenticating }
            onClick={ handleCrearCuenta } />
          </div>
        </div>
      </div>
      <div className="footer-login">
        <div className="wrapper-enlaces">
          <div className="div-condiciones">
            <a>Condiciones de uso</a>
          </div>
          <div className='div-aviso'>
            <a>Aviso de Privacidad</a>
          </div>
          <div className="div-ayuda">
            <a>Ayuda</a>
          </div>
        </div>
        <div className='wrapper-firma'>
          <div className='firma'>
          <label>Creada con fines educativos y de portafolio</label><br></br>
          <label>Heiner Andrés Solano Arguedas</label><br></br>
          <label>heiner.andres@outlook.com</label><br></br>
          <label>+506 64040376</label><br></br>
          <label>©2024</label><br></br>
          </div>
        </div>
      </div>
    </div>
  )
}

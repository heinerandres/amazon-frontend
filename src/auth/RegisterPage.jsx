import React, { useMemo } from 'react'
import { useForm } from '../util/useForm';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../hooks/useAuthStore';
import { useSelector } from 'react-redux';
import { Alert, Grid } from '@mui/material';

export const RegisterPage = () => {

  const navigate = useNavigate();

  const { createUserWithEmail } = useAuthStore();

  const { status, errorMessage } = useSelector( state => state.auth );
  const isCheckingAuthentication = useMemo( () => status === 'checking', [status]);

  const { nombre, email, password, onInputChange } = useForm({
    nombre: '',
    email: '',
    password: ''
  });

    const onSubmit = ( event ) => {
      event.preventDefault();
      createUserWithEmail( nombre, email, password );
    }

    const handleSpan = () => {
      navigate("/auth/Login");
    }

  return (
    <div className="div-login">
      <div className="wrapper-login">
        <div className="login">
          <div className="div-logo-login">
            <img src="../img/logo-login.png"></img>
          </div>
          <form className="contenido-registro" onSubmit={ onSubmit }>
            <div className="titulo-login">
              <label>Crear cuenta</label><br></br>
              <label className='text-login'>Nombre</label>
              {/*////////////////////////////////CORREO */}
              <input 
              className="input-text-login" 
              type='nombre' 
              name="nombre" 
              placeholder='Nombre y apellido'
              required={ true }
              value={ nombre }
              onChange={ onInputChange }
              />
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
              minLength={ 6 }
              placeholder="123"
              value={ password }
              onChange={ onInputChange }/>
              <Grid display={ !!errorMessage ? '': 'none' } >
              <Alert className='alert-register' severity='error'>{ errorMessage }</Alert>
              </Grid>
              
              {/*////////////////////////////////CONTINUAR */}
              <input 
              disabled={ isCheckingAuthentication }
              className="btn-form-login" 
              value="Continuar" 
              type='submit'  /><br></br>
              <span className="texto-register">¿Ya tienes cuenta? </span><span onClick={ handleSpan} className="iniciar-sesion-register">Iniciar sesión</span>
            </div>
          </form>
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

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './ecommerce.css';
import './carrito.css';
import './detalleArticulo.css';
import './login.css';
import { EcommerceApp } from './EcommerceApp.jsx'


createRoot(document.getElementById('root')).render(
    <EcommerceApp />
)

import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { EcommercePage } from '../ecommerce'
import { DetalleArticuloPage } from '../detalleArticulo'
import { CarritoPage } from '../carrito'

export const EcommerceRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<EcommercePage/>} />
        <Route path="/detalleArticulo" element={<DetalleArticuloPage/>} />
        <Route path="/carrito" element={<CarritoPage/>} />
        <Route path="/*" element={<Navigate to="/"/>} />
    </Routes>
  )
}

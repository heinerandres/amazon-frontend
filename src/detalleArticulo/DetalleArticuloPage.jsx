import { Footer, Header, HeaderMenu, StartPage } from "../ecommerce"
import { MostrarArticulo } from "../detalleArticulo"
import { useLocation } from "react-router-dom";
import { useEffect } from "react";


export const DetalleArticuloPage = () => {

  useEffect(()=>{
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  const location = useLocation();

  const { articulo } = location.state || {};

  return (
    <>
        <Header/>
        <HeaderMenu/>
        <MostrarArticulo articulo = { articulo }/>
        <StartPage/>
        <Footer/>
    </>
  )
}

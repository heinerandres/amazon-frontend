
import { useEffect } from "react";
import { Header, HeaderMenu, StartPage, Footer } from "../ecommerce"
import { Carrito } from "./";

export const CarritoPage = () => {
  useEffect(()=>{
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);


  return (
    <>
      <Header/>
      <HeaderMenu/>
      <Carrito/>
      <StartPage/>
      <Footer/>
    </>
  )
}

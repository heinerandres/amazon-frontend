import { useEffect, useState } from "react"
import { GridArticles, Header, HeaderMenu, Slider, StartPage, Footer } from "../"



export const EcommercePage = () => {

  useEffect(()=>{
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  const [ articulo, setArticulo ] = useState();

  const onSearchArticulo = ( articulo ) => {
    setArticulo( articulo );
  }

  return (
    <>
      <Header onSearchArticulo = { (x) => onSearchArticulo (x) }  />
      <HeaderMenu/>
      <Slider/>
      <GridArticles articulo = { articulo }/>
      <StartPage/>
      <Footer/> 
      
      
      
      
      
    </>
    
  )
}

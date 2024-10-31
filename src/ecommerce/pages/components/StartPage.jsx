import { useEffect } from "react"


export const StartPage = () => {

  const toTop = () => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  };

  return (
    <div id='inicio' onClick={()=> toTop()}>
      <a>Inicio de página</a>

    </div>
  )
}

import { useNavigate } from 'react-router-dom';
import { useArticulosStore } from '../../../hooks';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';

export const GridArticles = ({ articulo }) => {

  const { getArticulos, errorMessage } = useArticulosStore();

  const { status, articulos } = useSelector((state) => state.articulos);


  console.log(status);
  console.log(articulos);

  const navigate = useNavigate();


  //articulos del store
  useEffect(() => {
    getArticulos();
  }, []);

  //
  useEffect(()=>{
    if(errorMessage !== undefined){
      Swal.fire('Error en la autenticación', errorMessage, 'error');
    }
  }, [errorMessage])

  const onClickImg = (articulo) =>{
    navigate("/detalleArticulo", { state: { articulo: articulo } });
  };
  return (
    <>
      {status==="checking"? (
      <div className="loading-wrapper">
        <div className="img-loading-wrapper">
          <img src="./img/loading.gif"></img>
        </div>
      </div>
      ):
      <div id='grid-wrapper'>
      {
        articulos.map( (articulo) => (
          <div key= { articulo._id } className='grid-item'>
            
            <div className='div-titulo-grid'>
              <span>{ articulo.nombre_corto }</span>
            </div>
            <div className="div-foto-grid" onClick={ () => onClickImg( articulo ) }>
              <img src={articulo.img1}></img>
            </div>
            <div className="div-precio-grid">
              <span>45% de descuento</span>
            </div>
          </div>
        ))
      }
      </div>}
    </>
  )
}

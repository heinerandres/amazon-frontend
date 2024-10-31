import './App.css'

function App() {

  return (
    <>
    <header>
      <a>
        <img src='./img/logo-header.png'></img>
      </a>
      <div id="header-buscar">
        <div id="div-select-buscar">
        <select >
          <option selected="selected">Todas las categorías</option>
        </select>
        </div>
        
        <div id="div-input-header">
          <input id="input-header" type="text" placeholder="Buscar Amazon.com"></input>
        </div>

        <div id="div-icono-buscar-header">
          <a>
            <img src="./img/lupa.png"></img>
          </a>
        </div>
      </div>
      <div id="header-identificarse">
        <span id="identificarse-label-1">Hola, Identificate</span>
        <span id="identificarse-label-2">Cuenta y Listas</span>
        
      </div>
      <div id="header-pedidos">
        <span>Pedidos</span>
      </div>
      <div id="header-carrito">
        <span id="numero-carritos-header">20</span><br></br>
        <span>
          <img src="./img/carrito-header.png"></img>
        </span>
        <label id="letras-carritos-header">Carrito</label>
      </div>
      
    </header>

    <div id='menu-header'>
      <div class="item-menu-header">
        <a>
          <span>
            <img src="./img/menu-header.png"></img>
          </span>
          <span class="todo">Todo</span>
        </a>
      </div>
      <div class="item-menu-header">
        <a>Los más vendidos</a>
      </div>
      <div class="item-menu-header">
        <a>Promociones</a>
      </div>
      <div class="item-menu-header">
        <a>Lo nuevo</a>
      </div>
      <div class="item-menu-header">
        <a>Los más regalados</a>
      </div>
      <div class="item-menu-header">
        <a>Libros</a>
      </div>
      <div class="item-menu-header">
        <a>Belleza</a>
      </div>
      <div class="item-menu-header">
        <a>Cómputo y tabletas</a>
      </div>
      <div class="item-menu-header">
        <a>Electrónicos</a>
      </div>
      <div class="item-menu-header">
        <a>Juguetes y juegos de mesa</a>
      </div>
      <div class="item-menu-header">
        <a>Outlet</a>
      </div>
      <div class="item-menu-header">
        <a>Videojuegos</a>
      </div>
      <div class="item-menu-header">
        <a>Música</a>
      </div>
      <div class="item-menu-header">
        <a>Hogar y Cocina</a>
      </div>
      <div class="item-menu-header">
        <a></a>
      </div>
    </div>

    <div id='slider'>
      <img src="./img/3.jpg"></img>
      

    </div>

    <div id='grid-wrapper'>
      <div class="grid-item">
        <div class="div-titulo-grid">
          <span>Ofertas en tendencia</span>
          
        </div>
      </div>
      <div class="grid-item">
      <div class="div-titulo-grid">
          <span>Disfruta al aire libre</span>
        </div>
      </div>
      <div class="grid-item">
      <div class="div-titulo-grid">
          <span>Lo más vendido en calzado</span>
        </div>
      </div>
      <div class="grid-item">
      <div class="div-titulo-grid">
          <span>Hasta 25% en Audio</span>
        </div>
      </div>
      <div class="grid-item">
      <div class="div-titulo-grid">
          <span>Ahorra en consolas y juegos</span>
        </div>
      </div>
      <div class="grid-item">
        <div class="div-titulo-grid">
          <span>Artículos de Cocina</span>
        </div>
      </div>
      <div class="grid-item">
      <div class="div-titulo-grid">
          <span>Ofertas en Muebles</span>
        </div>
      </div>
      <div class="grid-item">
      <div class="div-titulo-grid">
          <span>Los más vendidos en Libros</span>
        </div>
      </div>
    </div>

    <div id='inicio'>
      <a>Inicio de página</a>

    </div>

    <footer>
      <div class="enlaces-footer">
        <div class="conocenos">
          <span class="enlaces-span-bold span-enlaces">Conocemos</span>
          <div class="enlaces-1">
            <span class="span-enlaces">Trabajar en Amazon</span>
          </div>
          <div class="enlaces-1">
            <span class="span-enlaces">Acerca de Amazon</span>
          </div>
          <div class="enlaces-1">
            <span class="span-enlaces">Información corporativa</span>
          </div>
          <div class="enlaces-1">
            <span class="span-enlaces">Departamento de prensa</span>
          </div>
          <div class="enlaces-1">
            <span class="span-enlaces">Amazon Sience</span>
          </div>
        </div>
        <div class="gana-dinero">
          <span class="enlaces-span-bold span-enlaces">
            Gana dinero con nosotros
          </span>
          <span class="span-enlaces">Vender en Amazon</span>
          <span class="span-enlaces">Suministro para Amazon</span>
          <span class="span-enlaces">Protege y desarrolla tu marca</span>
          <span class="span-enlaces">Vender en Amazon Handmade</span>
          <span class="span-enlaces">Publica tu libro de Kindle</span>
          <span class="span-enlaces">Programa de afiliados</span>
          <span class="span-enlaces">Anuncia tus productos</span>
        </div>
        <div class="podemos-ayudarte">
        <span class="enlaces-span-bold span-enlaces">
            Podemos ayudarte
          </span>
          <div class="enlaces-2">
            <span class="span-enlaces">Devolver o reemplazar productos</span>
          </div>
          <div class="enlaces-2">
            <span class="span-enlaces">Gestionar contenido y dispositivos</span>
          </div>
          <div class="enlaces-2">
            <span class="span-enlaces">Alertas de revisión y de seguridad del producto</span>
          </div>
          <div class="enlaces-2">
            <span class="span-enlaces">Lista de regalos</span>
          </div>
          <div class="enlaces-2">
            <span class="span-enlaces">Ayuda</span>
          </div>
        </div>
        <div class="metodos-de-pago">
          <span class="enlaces-span-bold span-enlaces">Métodos de pago</span>
          <span class="span-enlaces">Tarjetas de crédito</span>
          <span class="span-enlaces"> y débito</span>
          <span class="span-enlaces">Tarjetas de regalo</span>
          <span class="span-enlaces">Pago en efectivo</span>
          <span class="span-enlaces">Pago a meses</span>
          <span class="span-enlaces">Amazon cash</span>
        </div>
      </div>
      <div class="logos-footer">
        <div class="div-logo-amazon-footer">
          <img src="./img/logo-header.png"></img>

        </div>
        <div class="div-bandera">
          <div>
            <img src="./img/bandera-footer.png"></img>
            <span>Costa Rica</span>
          </div>
          
        </div>
        
      </div>
      <div class="privacidad">
        <div class="texto-privacidad">
          <span>Creada con fines educativos y de portafolio</span>
          <span>© 2024, Heiner Andrés Solano</span>
        </div>
      </div>
    </footer>
    </>
  )
}

export default App

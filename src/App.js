import './App.css';
import Practica from './principal/practica';

function App() {
  const informacion = [
    /* Lista de funciones con indices y nombres */
    { index:1, nombre:'Función número 1' },
    { index:2, nombre:'Función número 2' },
    { index:3, nombre:'Función número 3' },
    { index:4, nombre:'Función número 4' },
    { index:5, nombre:'Función número 5' }
  ];

  /*devolver la estructura de la app */
  return (
    <div className = 'App'> 
      <div className = 'contenedor-principal'>{/* contenedor principal*/}
        <div className = 'izquierda-superior'> {/* seccion izquierda con icono de barra*/}
          <i className = "fa-solid fa-bars"></i>
        </div>
        <div className = 'centro'> {/* seccion centro con el titulo */}
          <span className = 'texto1'>Xolopet</span>
        </div>
        <div className = 'derecha-superior'> {/* seccion derecha con iconos y texto */}
          <i className = "fa-regular fa-bell"></i>
          <i className = "fa-regular fa-moon"></i>
          <span className = 'texto2'>Cerrar Sesión</span>
        </div> 
      </div>

      <div className = 'contenedor-secundario'> {/* contenedor secundario con flechita */}
        <i class = "fa-solid fa-arrow-left"></i>
      </div>

      <div className = 'tercero'> {/* tercer contenedor con informacion*/}
        <div className = 'info1'>
          <span>Mentoria / De la Torre</span>
          <br></br>
          <span>ADMINISTRADOR</span>
        </div>

        <div className = 'info2'>
          <span>Rol:<strong> NombreDelRol</strong></span>
        </div>

        <div className = 'info3 textoderecha'>
          <span><strong>Última mentoria</strong></span>
          <br></br>
          <span>30/06/2023 a las 3:40 am</span>
          <br></br>
          <button className = 'boton1'>Editar Rol</button>
          <button className = 'boton2'>Siguiente</button>
        </div>
      </div>

      <div className = 'botones'> {/*Contenedor los botones*/}
        <button className = 'boton3'>Indicadores</button>
        <button className = 'boton4'>Entregables</button>
        <button className = 'boton5'>Funciones</button>
        <button className = 'boton6'>Acciones</button>
        <button className = 'boton7'>Notas</button>
      </div>


      {/* mapear la informacion y mostrar las cartas */}
      {
        informacion.map((elemento, nombre) => (
          <Practica titulo = {elemento.nombre} key = {elemento.index} />
        ))
      }

    </div>
  );
}

export default App;
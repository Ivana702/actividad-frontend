import React, { useState } from 'react';
import '../stylesheet/practica.css';

// funcion que devuelve el componente Pracatica 
function Practica ({titulo}) {
  const [botonSeleccionado, setBotonSeleccionado] = useState(null);

  const handleButtonClick = (numeroBoton) => {
    setBotonSeleccionado(numeroBoton);
    };

 //funcion para obtener el texto 
  const getTextoEncima = () => {
    switch (botonSeleccionado){
      case 1: 
        return 'Conoce la teoria';
      case 2:
        return 'Realizado con mucha supervision';
      case 3:
        return 'Realizado con poca supervision';
      case 4:
        return 'Realizado sin supervision';
      case 5:
        return 'Realizado con excelencia';
      default:
        return'';
    }
  };

  return(
    <div className = 'distribucion'> {/* cartas */}
      <div className = 'tarjeta'> 
        <div className = 'contenido'>
          <p>{titulo}</p>
          <div className ='botonesTarjetas'>
            {[1,2,3,4,5].map(numero => (
              <div className='contenedorBoton' key={numero}>
                <button
                className={`botonTarjeta${numero} ${botonSeleccionado === numero ? 'seleccionado' : ''}`}
                onClick={() => handleButtonClick(numero)}
                >
                {/* Boton {numero} */}
                </button>
                <div className={`textoEncima ${botonSeleccionado === numero ? 'mostrar' : ''}`}>
                  {getTextoEncima()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Practica;
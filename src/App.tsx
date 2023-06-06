import { useState } from 'react';

import Form from './components/FormSearch/Form.js';
import MensajeError from './components/MensajeError/MensajeError.js';
import CardClimaActual from './components/CardClimaActual/CardClimaActual.js';
import Card5DaysClima from './components/Card5DaysClima/Card5DaysClima.js';
import CardInfoCity from './components/CardInfoCountry/CardInfo.js';
import CuadroSalida from './components/CuadroSalida/CuadroSalida';


function App() {

  const [climaActual, setClimaActual] = useState<Array<[]>>([]);
  const [clima5Days, setClima5Days] = useState<Array<[]>>([]);
  const [infoCity, setInfoCity] = useState<Array<[]>>([]);
  const [error, setError] = useState<any>({nameError: "", msgError: ""});
  const [mostrarContenido, setMostrarContenido] = useState<boolean>(false);

  
  return (
    <>
      <div className="flex flex-row font-sans max-xl:flex-col">
        <div className="bg-yellow-600 text-sky-50 h-screen flex flex-col justify-center max-xl:h-80  max-sm:h-auto max-sm:items-center">
          <Form 
          setClimaActual={setClimaActual}
          setClima5Days={setClima5Days}
          setInfoCity={setInfoCity}
          setError={setError}
          setMostrar={setMostrarContenido}
          />
          <MensajeError msjError={error.msgError} titleError={error.nameError}  />
        </div>

          {
            mostrarContenido 
            ? (
              <div className="grow flex flex-col justify-center">

                <CardClimaActual 
                data={climaActual} 
                mostrar={mostrarContenido} />

                <div className='py-2 mx-5 my-2 flex flex-row max-[1000px]:flex-col max-[1000px]:gap-6'>
                  <Card5DaysClima 
                  data={clima5Days} 
                  mostrar={mostrarContenido} />
    
                  <CardInfoCity 
                  city={infoCity} 
                  mostrar={mostrarContenido} />
                </div>

              </div>
              )
            : (
              <div className="grow flex flex-col justify-center items-center">
                 <CuadroSalida />
              </div>
              )
          }
      </div>
    </>
  )
}

export default App
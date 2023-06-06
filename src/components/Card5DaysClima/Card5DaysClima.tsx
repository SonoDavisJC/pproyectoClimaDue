import {useState } from 'react';
import { Clima5Days } from "../../model/modelGlobal";
import { convertDate } from '../../function/functions';

// ICONS
import {TbClockHour3 as Hora } from 'react-icons/tb';
import {MdDateRange as Date} from 'react-icons/md';
import {FaInfoCircle as Info } from 'react-icons/fa';
import {GrNext as Next } from 'react-icons/gr';
import {GrPrevious as Prev} from 'react-icons/gr';



interface Props {
    data: any,
    mostrar: boolean
}

const CardDayClima = ({main, weather, wind, dt_txt}: Clima5Days) => {

    const nameImagen = weather?.icon;
    const rutaImagen = `https://openweathermap.org/img/wn/${nameImagen}@2x.png`

    return (<div className='grow flex flex-row items-center max-sm:flex-col max-sm:gap-5'>
        <div className='w-60'>
            <figure className='flex justify-center'>
                <img src={rutaImagen} alt={nameImagen} />
            </figure>
            <div className='text-center'>
                <p className='text-lg text-sky-300'>{main?.temp} ºC</p>
                <p className='font-extralight'>{weather?.main}, {weather?.description}</p>
                <p className='flex flex-col items-center'>
                    <span className='flex items-center gap-1'>
                        <span className='text-yellow-600'><Date /></span>
                        <span>{convertDate(dt_txt).fecha}</span>
                    </span>
                    <span className='flex items-center gap-1'>
                        <span className='text-yellow-600'><Hora /></span>
                        <span>{convertDate(dt_txt).hora} hrs</span>
                    </span>
                </p>
            </div>
        </div>
        <div className='grow flex justify-center'>
            <div>
                <p className='font-extralight'>Temp. Maxima : 
                <span className='text-sky-300'> {main?.temp_max} ºC</span> 
                </p>
                <p className='font-extralight'>
                    Temp. Minima : 
                    <span className='text-sky-300'> {main?.temp_min} ºC</span>
                </p>
                <p className='font-extralight'>
                    Humedad : 
                    <span className='text-sky-300'> {main?.humidity} %</span>
                </p>
                <p className='font-extralight'> 
                    Feels like : 
                    <span className='text-sky-300'> {main?.feels_like} º</span>
                </p>
                <p className='font-extralight'> 
                    Presión : 
                    <span className='text-sky-300'> {main?.pressure} Hpa</span>
                </p>
                <p className='font-extralight'>
                    Velocidad de Viento :
                    <span className='text-sky-300'> {wind?.speed} m/s</span>
                </p>
                <p className='font-extralight'>
                    Rafaga de Viento :  
                    <span className='text-sky-300'> {wind?.gust} m/s</span>
                </p>
            </div>
        </div>
    </div>);
}


const Card5DaysClima = ({data: {list}, mostrar}: Props) => {
    const [indice, setIndice] = useState<number>(0);
    const [disabledNext, setDisabledNext] = useState<boolean>(false);
    const [disabledPrev, setDisabledPrev] = useState<boolean>(true);
    const longitud = mostrar ? list.length : 0;

    const irAtras = () => {
        if(indice <= 1) {
            setDisabledPrev(true);
        }
        if(indice == 0){
            console.error('Invalid');
            return
        }
        setDisabledNext(false);
        setIndice(indice - 1);
    }

    const irAdelane = () => {
        if(indice >= longitud - 2) {
            setDisabledNext(true);
        }
        if(indice == longitud - 1){
            console.error('Invalid');
            return;
        }
        setDisabledPrev(false);
        setIndice(indice + 1);
    }

    return (
        mostrar 
        ? (<div
            className='bg-sky-950 text-sky-100 grow px-5 py-3 rounded-md'>
                <p className='text-sm flex items-center text-slate-400 gap-2 py-1 border-slate- border-b-2 border-slate-400'><Info /> <span>Tiempo en los proximos 5 dias :</span></p>
                <div className='flex flex-row'>
                <button 
                className={`bg-sky-900 rounded-md my-2 hover:bg-sky-600 transition-all ease-in duration-200 ${disabledPrev ? 'hidden': ''}`}
                onClick={() => irAtras()} 
                disabled={disabledPrev}
                ><Prev /></button>
                
                <CardDayClima
                main={list && list[indice].main}
                weather={list && list[indice].weather[0]}
                wind={list && list[indice].wind}
                dt_txt={list && list[indice].dt_txt}
                />

                <button
                className={`bg-sky-900 rounded-md my-2 hover:bg-sky-600 transition-all ease-in duration-200 ${disabledNext ? 'hidden' : ''}`}
                style={{color: 'white'}}
                onClick={() => irAdelane()}
                disabled={disabledNext}
                ><Next />
                </button>
                </div>
            </div>
            )
        : (null)
        
    )
}

export default Card5DaysClima;
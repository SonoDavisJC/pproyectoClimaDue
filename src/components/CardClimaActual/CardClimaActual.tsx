import { ClimaActual } from "../../model/modelGlobal";
import { HiLocationMarker as Location } from 'react-icons/hi';
import {FaInfoCircle as Info } from 'react-icons/fa';

import {FaTemperatureHigh as TempMax } from 'react-icons/fa';
import {FaTemperatureLow as TempMin } from 'react-icons/fa';
import {BsDropletFill as Humidity} from 'react-icons/bs';
import {TbTemperaturePlus as Feels} from 'react-icons/tb'
import {SiSpeedtest as WSpeed} from 'react-icons/si';
import {FaCompress as Presion} from 'react-icons/fa';



interface Props {
    data: ClimaActual,
    mostrar: boolean,
}

const CardClimaActual = ({data: {name, sys, main, weather, wind}, mostrar}: Props) => {

    const nameImagen = weather && weather[0]?.icon;
    const rutaImagen = `https://openweathermap.org/img/wn/${nameImagen}@4x.png`;

    return (
            mostrar 
            ? (
                <div
                className="bg-sky-950 text-sky-100 px-5 py-3 mx-5 my-2 rounded-md "
                >
                    <p className="flex text-sm gap-2 items-center text-slate-400 py-1 border-slate- border-b-2 border-slate-400"><Info /> <span>Tiempo en estos momentos</span></p>
                    <div className="flex flex-row items-center max-sm:flex-col max-sm:gap-5">
                    <div className="grow text-center">
                        <figure className="flex justify-center">
                            <img src={rutaImagen} alt={nameImagen} className="" />
                        </figure>
                        <div className="text-center">
                            <p className="text-3xl font-medium text-sky-300"> {main?.temp} ºC</p>
                            <p className="text-xl font-extralight">{weather && weather[0]?.main}, {weather && weather[0]?.description}</p>
                        </div>
                        <div className="text-center">
                            <p className="flex gap-2 items-center text-2xl justify-center font-extralight"><span className="text-yellow-600"><Location /> </span> <span className="font-medium">{name} - {sys?.country}</span></p>
                        </div>
                    </div>
                    <div className="grow flex justify-center">
                        <div className="">
                            <p className="font-semibold mb-3">El tiempo en la ciudad de {name} :</p>
                            <p className="font-extralight flex items-center gap-2">
                                <span className="text-yellow-600"><TempMax /> </span>
                                <span>Temperatura Máxima : <span className="text-sky-300 font-medium">{main?.temp_max} ºC </span></span>
                            </p>
                            <p className="font-extralight flex items-center gap-2">
                                <span className="text-yellow-600"><TempMin /></span>
                                <span>Temperatura Mínima : <span className="text-sky-300 font-medium">{main?.temp_min} ºC</span> </span>
                            </p>
                            <p className="font-extralight flex items-center gap-2">
                                <span className="text-yellow-600"><Humidity /></span>
                                <span>Humedad : <span className="text-sky-300 font-medium">{main?.humidity} %</span></span>
                            </p>
                            <p className="font-extralight flex items-center gap-2">
                                <span className="text-yellow-600"><Feels /></span>
                                <span>Feels like: <span className="text-sky-300 font-medium">{main?.feels_like} º</span></span>
                            </p>
                            <p className="font-extralight flex items-center gap-2">
                                <span className="text-yellow-600"><Presion /></span>
                                <span> Presion: <span className="text-sky-300 font-medium">{main?.pressure} Hpa</span></span>
                            </p>
                            <p className="font-extralight flex items-center gap-2">
                                <span className="text-yellow-600"><WSpeed /></span>
                                <span>Velocidad de Viento: <span className="text-sky-300 font-medium">{wind?.speed} m/s</span></span>
                            </p>
                        </div>
                    </div>
                    </div> 
                </div>)
            : (
                null
            )
    )
}

export default CardClimaActual;
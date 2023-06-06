import { CordenadasCiudad } from "../../model/modelGlobal";
import { convertPopultation } from "../../function/functions";
import {FaInfoCircle as Info } from 'react-icons/fa';
import { BsFillPeopleFill as People } from "react-icons/bs"

interface Props {
    city: any,
    mostrar: boolean
}

const CardInfoCity = ({city: {population, coord}, mostrar}: Props | CordenadasCiudad) => {
    return (
        mostrar 
        ? (
            <div
            className="bg-sky-950 text-sky-100 grow ml-2 px-5 py-3 rounded-md max-[1000px]:ml-0"
            >
                <p className="flex text-sm items-center text-slate-400 gap-2 py-1 border-slate- border-b-2 border-slate-400"><Info /> <span>Mas información</span></p>
                <div className="flex justify-center mt-10">
                    <div className="">
                        <p className="flex items-center gap-2 font-extralight">Población Aproximada:
                        <span>{convertPopultation(population || 0)}</span> 
                        <span className="text-yellow-600"> <People /> </span>
                        </p>
                        <div className="mt-2">
                            <p>Cordenadas de la ciudad :</p>
                            <p className="font-extralight">Latitud :  
                                <span className="text-sky-300"> {coord?.lat}</span>
                            </p>
                            <p className="font-extralight">Longitud: 
                                <span className="text-sky-300"> {coord?.lon}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>)
        : (null)
    )
}

export default CardInfoCity;
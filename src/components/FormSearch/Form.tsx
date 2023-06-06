import React, { useState } from 'react';
import { API_KEY } from '../../auth/auth';
import axios from 'axios';
import Loader from '../Loader/Loader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/ReactToastify.min.css'


interface Props {
    setClimaActual: React.Dispatch<React.SetStateAction<Array<[]>>>,
    setClima5Days: React.Dispatch<React.SetStateAction<Array<[]>>>,
    setError: React.Dispatch<any>,
    setInfoCity: React.Dispatch<React.SetStateAction<Array<[]>>>,
    setMostrar: React.Dispatch<React.SetStateAction<boolean>>
}

const Form = ({setClimaActual, setClima5Days, setError, setInfoCity, setMostrar}: Props) => {

    const [ciudad, setCiudad] = useState<string>("");
    const [pais, setPais] = useState<string>("");
    const [loader, setLoeader] = useState<boolean>(false);

    const enviarDatos = async (e: React.FormEvent) => {
        e.preventDefault();

        setMostrar(false);
        setError({nameError: "", msgError: ""});
        
        if(!ciudad || !pais) {
            //setError({nameError: "Error", msgError: "Debes completar los campos para realizar la busqueda"})
            toast.error('Completar todos lo campos', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
            return;
        }
    
        setLoeader(true);

        try {
            const endPointClimaActual = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&APPID=${API_KEY}&units=metric&lang=es`;
            const endPointClima5Days = `https://api.openweathermap.org/data/2.5/forecast?q=${ciudad},${pais}&appid=${API_KEY}&units=metric&lang=es`;

            const promiseClimaActual = axios.get(endPointClimaActual);
            const promiseClima5Dias = axios.get(endPointClima5Days);

            Promise.all([promiseClimaActual, promiseClima5Dias])
            .then((response) => {

                setClimaActual(response[0].data);
                setClima5Days(response[1].data)
                setInfoCity(response[1].data?.city)
                setLoeader(false);
                setError({nameError: "", msgError: ""});
                setMostrar(true);

            }).catch((err) => {
                setLoeader(false);
                toast.error(`${err.name}, ${err.message}`, {
                    position: "bottom-right",
                    autoClose: false,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: false,
                    theme: "dark",
                    });
                //setError({nameError: err.name, msgError: err.message});
            })

        } catch (error) {
            console.log(error);
        }
    };


    return (
        <form 
        action="" 
        onSubmit={(e) => enviarDatos(e)}
        className='flex flex-col gap-7 w-96 p-2 m-2 max-xl:flex-row max-xl:w-full max-xl:items-center max-sm:flex-col' 
        >
            <div className='flex flex-col gap-2 mb-2 max-xl:w-6/12 max-sm:w-full max-sm:text-center'>
                <h1 className='text-2xl font-extrabold text-sky-950'>Predicción metereologica de tu ciudad</h1>
                <p className='font-regular'>Ingresa el nombre de tu ciudad y la abrebiatura del pais donde esa ciudad se encuentra.</p>
            </div>

            <div className='max-xl:grow flex flex-col gap-2'>
            <div className="flex flex-col">
                <label className=''>Nombre de la ciudad :</label>
                <input 
                type="text" 
                name="ciudad" 
                id="country" 
                placeholder="Nombre de la ciudad" 
                autoComplete='off'
                onChange={(e) => setCiudad(e.target.value)}
                className='py-1 px-2 outline-none font-regular text-slate-700 border-2 border-slate-300 bg-sky-50 transition-all ease-in-out rounded-md'
                />
            </div>

            <div className="flex flex-col">
                <label>Abreviatura de Pais :</label>
                <input 
                type="text" 
                name="pais" 
                id="country" 
                placeholder="Ejemplo:  Peru: PE, Argentina: AR, Mexico: MX"
                autoComplete='off'
                onChange={(e) => setPais(e.target.value)}
                className='py-1 px-2 outline-none text-slate-700 border-2 border-slate-300 bg-sky-50 transition-all ease-in-out rounded-md'
                />
                <span className='text-xs mt-1'>*Si desea mas informacion con respecto a la abrebiatura un pais visite <a href='https://www.inm.gob.mx/gobmx/word/index.php/listado-de-paises-con-abreviaturas/' className='text-blue-800 underline' target='_blank'>Aquí</a></span>
            </div>

            <div className="">
                <input 
                type="submit" 
                className="text-center text-white rounded-md bg-sky-950 w-full py-2 px-2 font-medium cursor-pointer mt-3 hover:bg-sky-900 transition-all ease-in duration-150" 
                value="Realizar busqueda" 
                />
            </div>

            

            <div className='w-full h-16 flex justify-center m-auto pt-5'>
                {  loader ? <Loader /> : null }
            </div>
            </div>

            

            <ToastContainer 
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"/>
            
        </form>
    )
}

export default Form;
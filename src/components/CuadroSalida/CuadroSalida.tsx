import imgCuadro from '../../assets/images/image.svg'

const CuadroSalida = () => {
    return (
        <div className="w-64 h-50 flex flex-col justify-center border-dashed border-2 border-slate-300 rounded-lg animate-pulse m-20">
            <div className='m-4 p-4 duration-700 ease-in-out'>
                <img src={imgCuadro} alt='Imagen de espera'/>
            </div>
        </div>
    )
}
export default CuadroSalida;
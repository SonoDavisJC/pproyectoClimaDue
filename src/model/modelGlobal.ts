export interface ClimaActual {
        name: string,
        sys: {
            country: string
        },
        main: {
            feels_like: number,
            humidity: number,
            pressure: number,              
            temp: number,
            temp_max: number,
            temp_min: number
        },
        wind?: {
            deg?: number,
            speed: number
        },
        weather?: any,
    mostrar: boolean 
}


export interface Clima5Days {
    main?: {
        feels_like: number,
        humidity: number,
        pressure: number,              
        temp: number,
        temp_max: number,
       temp_min: number,
    },
    weather?: {
        main: string,
        description: string
        icon?: string
    },
    wind?: {
        gust: number,
        speed: number
    },
    dt_txt: string,
}


export interface CordenadasCiudad {
    
    population?: number,
    coord?: {
        lat?: number,
        lon?: number
    },
    mostrar: boolean
}
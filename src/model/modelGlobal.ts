export interface ClimaActual {
    data: {
        name: string,
        sys: {
            country: string
        },
        main: {
            feels_like: number | undefined,
            humidity: number | undefined,
            pressure: number | undefined,              
            temp: number | undefined,
            temp_max: number  | undefined,
            temp_min: number | undefined
        },
        wind?: {
            deg?: number,
            speed: number
        },
        weather?: any
    },
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
    city: {
        population?: number,
        coord?: {
            lat?: number,
            lon?: number
        }
    },
    mostrar: boolean
}
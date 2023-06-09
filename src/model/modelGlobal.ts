export interface ClimaActual {
    data: {
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
        weather?: {
            icon?: string
            main: string,
            description: string
        },
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
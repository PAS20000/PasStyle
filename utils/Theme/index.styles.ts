import '@emotion/react'
import { Theme } from '@emotion/react'

export type ColorVariants = {
    100:string
    200:string
    300:string
    400:string
    500:string
    600:string
    700:string
    800:string
    900:string
}
export type ColorObj = {
    purple:ColorVariants
    yellow:ColorVariants
    green:ColorVariants
    gray:ColorVariants
    orange:ColorVariants
    black:string 
    cyan:ColorVariants
    blue:ColorVariants
    red:ColorVariants
    white:string
}

declare module '@emotion/react' {
    export interface Theme {
            colors: ColorObj
    }
}

const theme : Theme = {
    colors:{
        black:'#00000',
        white:'#fffff',
        gray:{
            "100":'#f6f6f6',
            "200":'#f1f1f1',
            "300":'#e5e5e5',
            "400":'#c2c2c2',
            "500":'#a4a4a4',
            "600":'#7a7a7a',
            "700":'#666666',
            "800":'#474747',
            "900":'#252525'
        },
        orange:{
            "100":'#ffdfb1',
            "200":'#ffca7f',
            "300":'#ffb54c',
            "400":'#ffa425',
            "500":'#ff9500',
            "600":'#fb8901',
            "700":'#f57902',
            "800":'#ef6902',
            "900":'#e64d03'
        },
        purple:{
            "100":'#dcc2e2',
            "200":'#c69bd0',
            "300":'#af75bd',
            "400":'#9e5aae',
            "500":'#8e44a0',
            "600":'#813f99',
            "700":'#70398f',
            "800":'#613385',
            "900":'#472a71'
        },
        yellow:{
            "100":'#fcfdc0',
            "200":'#f9fa93',
            "300":'#f5f662',
            "400":'#f0f234',
            "500":'#ffff00',
            "600":'#ffeb00',
            "700":'#ffd100',
            "800":'#ffb700',
            "900":'#ff9a00'
        },
        green:{
            "100":'#d5eeca',
            "200":'#b9e3a8',
            "300":'#9dd884',
            "400":'#86cf69',
            "500":'#71c64f',
            "600":'#62b647',
            "700":'#4fa23c',
            "800":'#3b8d33',
            "900":'#116b21'
        },
        cyan:{
            "100":'#addfe1',
            "200":'#74cbce',
            "300":'#2cb7b9',
            "400":'#00a7a8',
            "500":'#009796',
            "600":'#008a88',
            "700":'#007a77',
            "800":'#006a66',
            "900":'#004e48'
        },
        blue:{
            "100":'#c3c9e2',
            "200":'#9da7ce',
            "300":'#7784ba',
            "400":'#5a6aac',
            "500":'#3d509f',
            "600":'#374996',
            "700":'#2e3f8a',
            "800":'#27357e',
            "900":'#1b2568'
        },
        red:{
            "100":'#f5b5bf',
            "200":'#ec8695',
            "300":'#e1586d',
            "400":'#d83651',
            "500":'#cf1838',
            "600":'#c01137',
            "700":'#ac0a35',
            "800":'#990033',
            "900":'#77002f'
        },
    }
    
}

export default theme
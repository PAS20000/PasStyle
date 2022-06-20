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
    pink:ColorVariants
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
            "100":'',
            "200":'',
            "300":'',
            "400":'#44475a',
            "500":'',
            "600":'#282a36',
            "700":'',
            "800":'',
            "900":''
        },
        orange:{
            "100":'',
            "200":'',
            "300":'',
            "400":'',
            "500":'',
            "600":'',
            "700":'',
            "800":'',
            "900":''
        },
        purple:{
            "100":'',
            "200":'',
            "300":'#bd93f9',
            "400":'',
            "500":'',
            "600":'',
            "700":'',
            "800":'',
            "900":''
        },
        yellow:{
            "100":'',
            "200":'',
            "300":'#f1fa8c',
            "400":'',
            "500":'',
            "600":'',
            "700":'',
            "800":'',
            "900":''
        },
        green:{
            "100":'',
            "200":'',
            "300":'#50fa7b',
            "400":'',
            "500":'',
            "600":'#008000',
            "700":'',
            "800":'',
            "900":''
        },
        cyan:{
            "100":'',
            "200":'',
            "300":'#8be9fd',
            "400":'',
            "500":'',
            "600":'',
            "700":'',
            "800":'',
            "900":''
        },
        blue:{
            "100":'',
            "200":'',
            "300":'',
            "400":'',
            "500":'',
            "600":'',
            "700":'',
            "800":'',
            "900":''
        },
        red:{
            "100":'',
            "200":'',
            "300":'#ff5555',
            "400":'',
            "500":'',
            "600":'',
            "700":'',
            "800":'',
            "900":''
        },
        pink:{
            "100":'',
            "200":'',
            "300":'#ff79c6',
            "400":'',
            "500":'',
            "600":'',
            "700":'',
            "800":'',
            "900":''
        },
    }
    
}

export default theme
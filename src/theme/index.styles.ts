import '@emotion/react'
import { Theme } from '@emotion/react'

declare module '@emotion/react' {
    export interface Theme {
      colors?: {
        purple:string
        yellow:string
        green:string
        darkGray:string 
        cyan:string
        blue:string
        red:string
        bg:string
        white:string
        pink:string
      }
    }
  }

export const light : Theme = {
    colors: {
        purple:'',
        yellow:'',
        green:'',
        darkGray:'', 
        cyan:'',
        blue:'',
        red:'',
        white:'#f8f8f2',
        pink:'#ff79c6',
        bg:'#21202c'
    }
}

export const dark : Theme = {
    colors: {
        purple:'#bd93f9',
        yellow:'#f1fa8c',
        green:'#50fa7b',
        darkGray:'#282a36', 
        cyan:'#8be9fd',
        blue:'#6272a4',
        red:'#ff5555',
        white:'#f8f8f2',
        pink:'#ff79c6',
        bg:'#21202c'
    }
}
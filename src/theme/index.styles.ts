import '@emotion/react'
import { Theme } from '@emotion/react'

declare module '@emotion/react' {
    export interface Theme {
      colors?: {
        primary:string
        secondary: string
        tertiary:string
        quartenary:string
        quintenary:string
        bg:string
      }
    }
  }

export const light : Theme = {
    colors: {
        primary:'yellow',
        secondary:'red',
        tertiary:'blue',
        quartenary:'gray',
        quintenary:'#242',
        bg:'orange'
    }
}

export const dark : Theme = {
    colors: {
        primary:'#bd93f9',
        secondary:'#f1fa8c',
        tertiary:'#50fa7b',
        quartenary:'#282a36', 
        quintenary:'#8be9fd',
        bg:'#21202c'
    }
}
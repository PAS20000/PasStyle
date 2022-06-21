import * as React from 'react'
import { Theme, ThemeProvider } from '@emotion/react'
import { PropsCTXdefault, SetState } from '../types'
import theme from '../../../utils/theme/index.styles'
import { Colors } from './useThemeCTX'

export type mode = 'dark' | 'light'

export type ThemeCTX = {
    theme:Theme
    mode:mode
    setMode:SetState<mode>
    changeMode:() => void
    ChangeColorByTheme:(Light : Colors[number], Dark : Colors[number]) => string
}

export const PasStyleThemeContext = React.createContext<ThemeCTX>(null)

const PasStyleThemeProvider = ({
    children
} : PropsCTXdefault) => {

    const [mode, setMode] = React.useState<mode>('light')
    
        const changeMode = () => {
            setMode(mode === 'dark' ? 'light' : 'dark')
        }

        const ChangeColorByTheme = (Light : Colors[number], Dark : Colors[number]) => {

            const {colors} = theme

           if(mode === 'dark') {
            
                const dark = Dark.split('.')
                return colors[dark[0]][dark[1]]
            }
            if(mode === 'light'){

                const light = Light.split('.')
                return colors[light[0]][light[1]]

            } else {
                console.error('Error ChangeColorByTheme')
            }
       }

       
   return(
        <PasStyleThemeContext.Provider value={{mode, setMode, changeMode, theme, ChangeColorByTheme}}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </PasStyleThemeContext.Provider>
    )
}
   
export default PasStyleThemeProvider
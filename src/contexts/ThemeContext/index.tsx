import * as React from 'react'
import { Theme, ThemeProvider } from '@emotion/react' 
import { dark, light } from '../../theme/index.styles'
import { PropsCTXdefault, SetState } from '../types'


type mode = 'dark' | 'light'

export type ThemeCTX = {
    mode:mode
    setMode:SetState<mode>
    theme:Theme
    setTheme:SetState<Theme>
    changeMode:Function
}



export const PasStyleThemeContext = React.createContext<ThemeCTX>(null)

const PasStyleThemeProvider = ({
    children
} : PropsCTXdefault) => {

    const [mode, setMode] = React.useState<mode>('dark')

    const [theme, setTheme] = React.useState(dark)

        React.useEffect(() => {
           setTheme(mode === 'dark' ? dark : light)
        }, [mode])

        const changeMode = () : void => {
            setMode(mode === 'dark' ? 'light' : 'dark')
        }

   return(
        <PasStyleThemeContext.Provider value={{mode, setMode, theme, setTheme, changeMode}}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </PasStyleThemeContext.Provider>
    )
}
   
export default PasStyleThemeProvider
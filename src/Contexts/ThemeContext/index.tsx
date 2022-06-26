import * as React from 'react'
import { css, Theme, ThemeProvider } from '@emotion/react'
import { PropsCTXdefault, SetState } from '../types'
import theme from '../../../utils/theme/index.styles'
import { Colors } from './useThemeCTX'
import useMethods from '../../Hooks/useMethods'
import PasStyle from '../..'
import { Styles } from '../../../utils/types'

export type Mode = 'dark' | 'light'

export type ThemeCTX = {
    theme:Theme
    mode:Mode
    setMode:SetState<Mode>
    changeMode:() => void
    ChangeColorByTheme:(Light : Colors[number], Dark : Colors[number]) => string
}

export const PasStyleThemeContext = React.createContext<ThemeCTX>(null)

const PasStyleThemeProvider = ({
    children
} : PropsCTXdefault) => {

    const { GET } = useMethods()
    const [mode, setMode] = React.useState<Mode>('light')
    
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

       React.useEffect(() => {
        const body = GET.tag('body').query
        body.setAttribute('css', 'BODY')
       }, [])

   return(
        <PasStyleThemeContext.Provider value={{mode, setMode, changeMode, theme, ChangeColorByTheme}}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </PasStyleThemeContext.Provider>
    )
}
   
export default PasStyleThemeProvider
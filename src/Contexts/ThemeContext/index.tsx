import * as React from 'react'
import { PropsCTXdefault, SetState } from '../types'
import theme, { Theme } from '../../../utils/theme/index.styles'
import { Colors } from './useThemeCTX'
import useMethods from '../../Hooks/useMethods'

export type Mode = 'dark' | 'light'

export type ThemeCTX = {
    theme:Theme
    mode:Mode
    setMode:SetState<Mode>
    changeMode:() => void
    ChangeColorByTheme:(Light : Colors[number], Dark : Colors[number]) => string
    ChangeColorCustom:(Light:string, Dark:string) => string
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

       const ChangeColorCustom = (Light:string, Dark:string) => {
            if(mode === 'dark') {
                return Dark
            }
            if(mode === 'light'){
                return Light

            } else {
                console.error('Error ChangeColorCustom')
            }
       }

    const css = {
        background:ChangeColorByTheme('gray.700', 'gray.900'),
        padding:'0px',
        margin:'0px',
    } as CSSStyleDeclaration

    React.useEffect(() => {
        const body = GET.tag('body').query
        body && body.setAttribute('style', `
            background:${ChangeColorByTheme('gray.900', 'black')};
            padding:0px;
            margin:0px;
        `.trim())
    }, [mode])

   return(
        <PasStyleThemeContext.Provider value={{mode, setMode, changeMode, theme, ChangeColorCustom, ChangeColorByTheme}}>
            {children}
        </PasStyleThemeContext.Provider>
    )
}
   
export default PasStyleThemeProvider
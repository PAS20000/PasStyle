import * as React from 'react'
import { PasStyleThemeContext, ThemeCTX } from '../../contexts/ThemeContext'


const useThemeCTX = () : ThemeCTX  => {
    const { mode, setMode, theme, setTheme, changeMode } = React.useContext(PasStyleThemeContext)

    return {
        mode,
        setMode,
        theme,
        setTheme,
        changeMode,
    }
}

export default useThemeCTX
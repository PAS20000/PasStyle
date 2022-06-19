import * as React from 'react'
import { PasStyleThemeContext, ThemeCTX } from '..'


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
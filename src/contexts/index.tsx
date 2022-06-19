import * as React from 'react'
import PasStyleThemeProvider from './ThemeContext'

type Props = {
    children:React.ReactNode
}

export const PasStyleProvider = ({
    children
} : Props) => {

    return(
        <PasStyleThemeProvider>
            {children}
        </PasStyleThemeProvider>
    )
}

export default PasStyleProvider
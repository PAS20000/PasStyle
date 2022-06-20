import * as React from 'react'
import PortalProvider from './PortalContext'
import PasStyleThemeProvider from './ThemeContext'

type Props = {
    children:React.ReactNode
}

export const PasStyleProvider = ({
    children
} : Props) => {

    return(
        <PasStyleThemeProvider>
            <PortalProvider>
                {children}
            </PortalProvider>
        </PasStyleThemeProvider>
    )
}

export default PasStyleProvider
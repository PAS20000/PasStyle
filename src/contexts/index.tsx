import * as React from 'react'
import AuthProvider from './AuthContext'
import PasStyleThemeProvider from './ThemeContext'

type Props = {
    children:React.ReactNode
}

export const GlobalProvider = ({
    children
} : Props) => {

    return(
        <PasStyleThemeProvider>
            <AuthProvider>
                {children}
            </AuthProvider>
        </PasStyleThemeProvider>
    )
}

export default GlobalProvider
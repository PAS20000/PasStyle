import * as React from 'react'
import AuthProvider from './AuthContext'
import DemoProvider from './DemoContext'
import PasStyleThemeProvider from './ThemeContext'

type Props = {
    children:React.ReactNode
}

export const GlobalProvider = ({
    children
} : Props) => {

    return(
        <DemoProvider>
            <PasStyleThemeProvider>
                <AuthProvider>
                    {children}
                </AuthProvider>
            </PasStyleThemeProvider>
        </DemoProvider>
    )
}

export default GlobalProvider
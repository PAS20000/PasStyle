import * as React from 'react'
import AuthProvider from './AuthContext'
import DemoProvider from './DemoContext'
import PasStyleThemeProvider from './ThemeContext'
import UserExperienceProvider from './UserExperienceContext'

type Props = {
    children:React.ReactNode
}

export const GlobalProvider = ({
    children
} : Props) => {

    return(
        <DemoProvider>
            <PasStyleThemeProvider>
                <UserExperienceProvider>
                    <AuthProvider>
                        {children}
                    </AuthProvider>
                </UserExperienceProvider>
            </PasStyleThemeProvider>
        </DemoProvider>
    )
}

export default GlobalProvider
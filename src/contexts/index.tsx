import * as React from 'react'
import AuthProvider from './AuthContext'
import DemoProvider from './DemoContext'
import UserExperienceProvider from './UserExperienceContext'

type Props = {
    children:React.ReactNode
}

export const GlobalProvider = ({
    children
} : Props) => {

    return(
        <DemoProvider>
                <UserExperienceProvider>
                    <AuthProvider>
                        {children}
                    </AuthProvider>
                </UserExperienceProvider>
        </DemoProvider>
    )
}

export default GlobalProvider
import * as React from 'react'
import { PropsCTXdefault, SetState } from '../types'

export type AuthCTX = {
    auth:boolean
    setAuth:SetState<boolean>
}

export const AuthContext = React.createContext<AuthCTX>(null)

const AuthProvider = ({
    children
} : PropsCTXdefault) => {
    const [auth, setAuth] = React.useState<boolean>(false)
    
   return(
        <AuthContext.Provider value={{auth, setAuth}}>
            {children}
        </AuthContext.Provider>
    )
}
   
export default AuthProvider
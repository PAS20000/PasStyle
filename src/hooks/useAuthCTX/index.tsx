import * as React from 'react'
import { AuthContext, AuthCTX } from '../../contexts/AuthContext'


const useAuthCTX = () : AuthCTX  => {
    const { auth, setAuth } = React.useContext(AuthContext)

    return {
        auth,
        setAuth
    }
}

export default useAuthCTX
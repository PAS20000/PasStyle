import * as React from 'react'
import { UserExperienceContext, UserExperienceCTX } from '../../contexts/UserExperienceContext'

const useUserExperienceCTX = () : UserExperienceCTX  => {
    const { globalOpen, setGlobalOpen } = React.useContext(UserExperienceContext)

    return {
        globalOpen, 
        setGlobalOpen
    }
}

export default useUserExperienceCTX
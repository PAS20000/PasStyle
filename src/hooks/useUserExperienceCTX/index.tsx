import * as React from 'react'
import { UserExperienceContext, UserExperienceCTX } from '../../contexts/UserExperienceContext'

const useUserExperienceCTX = () : UserExperienceCTX  => {
    const { globalOpen, 
            setGlobalOpen, 
            closeSelect
    } = React.useContext(UserExperienceContext)

    return {
        globalOpen, 
        setGlobalOpen,
        closeSelect
    }
}

export default useUserExperienceCTX
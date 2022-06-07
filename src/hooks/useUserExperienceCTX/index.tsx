import * as React from 'react'
import { UserExperienceContext, UserExperienceCTX } from '../../contexts/UserExperienceContext'

const useUserExperienceCTX = () : UserExperienceCTX  => {
    const { globalOpen, 
            setGlobalOpen, 
            closeAll, 
            closeFormSelect, 
            closeNavSelect 
    } = React.useContext(UserExperienceContext)

    return {
        globalOpen, 
        setGlobalOpen,
        closeAll,
        closeFormSelect,
        closeNavSelect
    }
}

export default useUserExperienceCTX
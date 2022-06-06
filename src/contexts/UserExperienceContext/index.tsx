import * as React from 'react'
import { PropsCTXdefault, SetState } from '../types'

export type UserExperienceCTX = {
    globalOpen:boolean
    setGlobalOpen:SetState<boolean>
}

export const UserExperienceContext = React.createContext<UserExperienceCTX>(null)

const UserExperienceProvider = ({
    children
} : PropsCTXdefault) => {
   const [globalOpen, setGlobalOpen] = React.useState<boolean>(false)
    
   return(
        <UserExperienceContext.Provider value={{ globalOpen, setGlobalOpen }}>
            {children}
        </UserExperienceContext.Provider>
    )
}
   
export default UserExperienceProvider
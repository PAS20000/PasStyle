import * as React from 'react'
import { PropsCTXdefault, SetState } from '../types'

type SelectOpen = {
    navSelect:boolean
    formSelect:boolean
}

export type UserExperienceCTX = {
    globalOpen:SelectOpen
    setGlobalOpen:SetState<SelectOpen>
    closeAll:Function
    closeNavSelect:Function
    closeFormSelect:Function
}

export const UserExperienceContext = React.createContext<UserExperienceCTX>(null)

const UserExperienceProvider = ({
    children
} : PropsCTXdefault) => {
   const [globalOpen, setGlobalOpen] = React.useState<SelectOpen>({
        formSelect:false,
        navSelect:false
   })

   const closeNavSelect = () : void => {
        setGlobalOpen({
            ...globalOpen,
            navSelect:false
        })       
    }

    const closeFormSelect = () : void => {
        setGlobalOpen({
            ...globalOpen,
            formSelect:false
        })
    }

   const closeAll = () : void => {
        setGlobalOpen({
            formSelect:false,
            navSelect:false
        })
   }

   console.log(globalOpen)

   return(
        <UserExperienceContext.Provider value={{ globalOpen, setGlobalOpen, closeAll, closeFormSelect, closeNavSelect }}>
            {children}
        </UserExperienceContext.Provider>
    )
}
   
export default UserExperienceProvider
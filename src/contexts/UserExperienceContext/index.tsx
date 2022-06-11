import * as React from 'react'
import { PropsCTXdefault, SetState } from '../types'

type formSelects = {
    tag:boolean
    f_weight:boolean
    t_transform:boolean
}

type SelectOpen = {
    navSelect:boolean
    formSelect:formSelects
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
        formSelect:{
            f_weight:false,
            t_transform:false,
            tag:false,
        },
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
            formSelect:{
                f_weight:false,
                t_transform:false,
                tag:false,
            },
        })
    }

   const closeAll = () : void => {
        setGlobalOpen({
            formSelect:{
                f_weight:false,
                t_transform:false,
                tag:false,
            },
            navSelect:false
        })
   }

   return(
        <UserExperienceContext.Provider value={{ globalOpen, setGlobalOpen, closeAll, closeFormSelect, closeNavSelect }}>
            {children}
        </UserExperienceContext.Provider>
    )
}
   
export default UserExperienceProvider
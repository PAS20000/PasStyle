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
    closeSelect:{
        all:Function
        nav:Function
        form:Function
    }
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

   const closeSelect = {
        all(){
            setGlobalOpen({
                formSelect:{
                    f_weight:false,
                    t_transform:false,
                    tag:false,
                },
                navSelect:false
            })
        },
        nav(){
            setGlobalOpen({
                ...globalOpen,
                navSelect:false
            })    
        },
        form(){
            setGlobalOpen({
                ...globalOpen,
                formSelect:{
                    f_weight:false,
                    t_transform:false,
                    tag:false,
                },
            }) 
        }
   }

   return(
        <UserExperienceContext.Provider value={{ globalOpen, setGlobalOpen, closeSelect }}>
            {children}
        </UserExperienceContext.Provider>
    )
}
   
export default UserExperienceProvider
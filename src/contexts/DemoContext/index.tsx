import * as React from 'react'
import { PropsCTXdefault, SetState } from '../types'
import { Styles } from '../../components/_PasStyle/types'

export type DemoCTX = {
    style:Styles
    setStyle:SetState<Styles>
    globalOpen:boolean 
    setGlobalOpen:SetState<boolean>
    hover:Styles 
    setHover:SetState<Styles>
}



export const DemoContext = React.createContext<DemoCTX>(null)

const DemoProvider = ({
    children
} : PropsCTXdefault) => {


    const [style, setStyle] = React.useState<Styles>({
                bg:'#000000',
                pd:'10px',
                mg:'10px',
                b_Radius:'8px',
                border:'solid 2px',
                t_decoration:'none',
                color:'#ffffff',
                b_Color:'#ffffff',
                cursor:'pointer',
                t_transform:'capitalize',
    })

    const [hover, setHover] = React.useState<Styles>({
        transition: '1s',
        op:'0.5',
    })

    const [globalOpen, setGlobalOpen] = React.useState<boolean>(false)


   return(
        <DemoContext.Provider value={{style, setStyle, globalOpen, setGlobalOpen, hover, setHover}}>
            {children}
        </DemoContext.Provider>
    )
}
   
export default DemoProvider
import * as React from 'react'
import { PropsCTXdefault, SetState } from '../types'
import { Styles } from '../../_PasStyle/utils/types'

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
                bg:'#282a36',
                pd:'10px',
                mg:'10px',
                b_radius:'8px',
                border:'solid 2px',
                t_decoration:'none',
                color:'#ffffff',
                b_color:'#ffffff',
                cursor:'pointer',
                t_transform:'capitalize',
    })

    const [hover, setHover] = React.useState<Styles>({
        transition: '1s',
        bg:'#000000',
        b_color:'#000000',
        color:'#ffffff',
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
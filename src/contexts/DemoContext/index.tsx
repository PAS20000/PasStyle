import * as React from 'react'
import { PropsCTXdefault, SetState } from '../types'
import { Styles } from '../../components/_PasStyle/types'

export type DemoCTX = {
    style:Styles
    setStyle:SetState<Styles>
}



export const DemoContext = React.createContext<DemoCTX>(null)

const DemoProvider = ({
    children
} : PropsCTXdefault) => {


    const [style, setStyle] = React.useState<Styles>({
                bg:'#000',
                pd:'10px',
                mg:'10px',
                b_Radius:'8px',
                border:'solid 2px',
                t_decoration:'none',
                color:'#fff',
                b_Color:'#b90909',
                cursor:'pointer',
                t_transform:'capitalize',
    })


   return(
        <DemoContext.Provider value={{style, setStyle}}>
            {children}
        </DemoContext.Provider>
    )
}
   
export default DemoProvider
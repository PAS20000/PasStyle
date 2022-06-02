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
        color:'cyan',
        pd:'20px',
        bg:'#000',
        b_Radius:'8px',
        border: `solid 2px ${'red'}`,
    })


   return(
        <DemoContext.Provider value={{style, setStyle}}>
            {children}
        </DemoContext.Provider>
    )
}
   
export default DemoProvider
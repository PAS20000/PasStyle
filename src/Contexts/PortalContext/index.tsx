import * as React from 'react'
import { PropsCTXdefault } from '../types'
import PasStyle from '../../index'

export type PortalCTX = {
   
}



export const PortalContext = React.createContext<PortalCTX>(null)

const PortalProvider = ({
    children
} : PropsCTXdefault) => {


   return(
        <PortalContext.Provider value={{}}>
            <PasStyle 
                id='PasStyle-Portal'
                tag='SPAN'
            />
            {children}
        </PortalContext.Provider>
    )
}
   
export default PortalProvider
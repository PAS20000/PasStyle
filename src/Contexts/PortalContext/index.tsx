import * as React from 'react'
import { PropsCTXdefault } from '../types'
import PasStyle from '../../index'

export type PopupCTX = {
   
}



export const PortalContext = React.createContext<PopupCTX>(null)

const PortalProvider = ({
    children
} : PropsCTXdefault) => {


   return(
        <PortalContext.Provider value={{}}>
            <PasStyle 
                id='PasStyle-Portal' 
            />
            {children}
        </PortalContext.Provider>
    )
}
   
export default PortalProvider
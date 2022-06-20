import * as React from 'react'
import PasStyle from '../..'
import { PropsCTXdefault } from '../types'

export type PortalCTX = {
   
}



export const PortalContext = React.createContext<PortalCTX>(null)

const PortalProvider = ({
    children
} : PropsCTXdefault) => {


   return(
        <PortalContext.Provider value={{}}>
            <PasStyle.Span
                id='PasStyle-Portal'
            />
            {children}
        </PortalContext.Provider>
    )
}
   
export default PortalProvider
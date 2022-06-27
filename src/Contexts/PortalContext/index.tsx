import * as React from 'react'
import PasStyle from '../..'
import useMethods from '../../Hooks/useMethods'
import { PropsCTXdefault } from '../types'

export type PortalCTX = {
   
}



export const PortalContext = React.createContext<PortalCTX>(null)

const PortalProvider = ({
    children
} : PropsCTXdefault) => {

    const { POST } = useMethods()

   return(
        <PortalContext.Provider value={{}}>
            <PasStyle.Div id='PASSTYLE-PORTAL'/>
            {children}
        </PortalContext.Provider>
    )
}
   
export default PortalProvider
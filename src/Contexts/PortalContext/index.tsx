import * as React from 'react'
import PasStyle from '../..'
import useGeneration from '../../Hooks/useMethods'
import { PropsCTXdefault } from '../types'

export type PortalCTX = {
   
}



export const PortalContext = React.createContext<PortalCTX>(null)

const PortalProvider = ({
    children
} : PropsCTXdefault) => {

    const { POST } = useGeneration()

   return(
        <PortalContext.Provider value={{}}>
            <PasStyle.Span
                id={POST.id('Portal')}
            />
            {children}
        </PortalContext.Provider>
    )
}
   
export default PortalProvider
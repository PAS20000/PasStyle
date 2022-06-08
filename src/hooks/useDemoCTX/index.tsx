import * as React from 'react'
import { DemoContext, DemoCTX } from '../../contexts/DemoContext'

const useDemoCTX = () : DemoCTX  => {
    const { setStyle, style, globalOpen, setGlobalOpen } = React.useContext(DemoContext)

    return {
      setStyle,
      style,
      globalOpen, 
      setGlobalOpen
    }
}

export default useDemoCTX
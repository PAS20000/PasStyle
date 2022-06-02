import * as React from 'react'
import { DemoContext, DemoCTX } from '../../contexts/DemoContext'

const useDemoCTX = () : DemoCTX  => {
    const { setStyle, style } = React.useContext(DemoContext)

    return {
      setStyle,
      style
    }
}

export default useDemoCTX
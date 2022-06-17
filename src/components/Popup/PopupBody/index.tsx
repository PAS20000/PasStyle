import * as React from 'react'
import PasStyle from '../../_PasStyle'
import { PasStyleProps } from '../../_PasStyle/types'

type Props = {
    children:React.ReactNode
}


const PopupBody = (props:PasStyleProps) => {
    
    const { children, transform, position } = props
    
    return (
        <PasStyle {...props}
            transform={transform ?? 'translate(50vh, 10vh)'}
            position={position ?? 'fixed'}
        >
            {children}
        </PasStyle>
    )
}

export default PopupBody
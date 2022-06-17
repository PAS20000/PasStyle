import * as React from 'react'
import { SetState } from '../../contexts/types'
import PasStyle from '../_PasStyle'

type Props = {
    children:React.ReactNode
    setState:SetState<boolean>
}


const Popup = ({
    children,
    setState
}: Props) => {
    
    return(
    <>
        <PasStyle
            bg='#0000009d' 
            w='100%' 
            h='100vh' 
            tag='DIV' 
            position='fixed'
            onClick={() => setState(false)}
        />
        {children}
    </>
    )
}

export default Popup
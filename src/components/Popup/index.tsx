import * as React from 'react'
import { SetState } from '../../contexts/types'
import PasStyle from '../_PasStyle'
import usePopup from './hooks/usePopup'

type Props = {
    children:React.ReactNode
    state:[boolean, SetState<boolean>]
}


const Popup = ({
    children,
    state
}: Props) => {

    const close = () => state[1](false)
    
    return(
    <>  
        {state[0] &&
            <>
                <PasStyle
                    bg='#0000009d' 
                    w='100%' 
                    h='100vh' 
                    tag='DIV' 
                    position='fixed'
                    onClick={() => close()}
                />
                {children}
            </>
        }
    </>
    )
}

export default Popup
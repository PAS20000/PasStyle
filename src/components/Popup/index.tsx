import * as React from 'react'
import { SetState } from '../../contexts/types'
import PasStyle from '../../_PasStyle'
import { PasStyleProps } from '../../_PasStyle/utils/types'

type Props = {
    state:[boolean, SetState<boolean>]
}

const Popup = (props:PasStyleProps<Props>) => {
    
    const {state, children, bg, tag, h, w, position, onClick} = props

    const close = () => state[1](false)

    return(
    <>  
        {state[0] &&
            <>
                <PasStyle {...props}
                    bg={bg ?? '#0000009d'} 
                    w={w ?? '100%'}
                    h={h ?? '100vh'}
                    tag={tag ?? 'DIV'} 
                    position={position ?? 'fixed'}
                    onClick={(e) => {
                        close()
                        onClick && onClick(e)
                    }}
                />
                {children}
            </>
        }
    </>
    )
}

export default Popup
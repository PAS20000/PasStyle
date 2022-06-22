import * as React from 'react'
import PasStyle, { PasStyleProps } from '../..'
import Remove from '../../../utils/Remove'
import { SetState } from '../../Contexts/types'
import Css from './index.styles'

type Props = {
   state:[boolean, SetState<boolean>]
}

const Popup = (props:PasStyleProps<Props>) => {
    
    const {children, state} = props

    const action = {
        open(){
            state[1](true)
        },
        close(){
            state[1](false)
        }
    }

    return(
    <>
        {state[0] &&
            <>
                <PasStyle.Div
                    {...Css.default()}
                    onClick={action.close}
                    {...Remove.children(props)}
                />
                {children}
            </>
        }
    </>
    )
}

export default Popup
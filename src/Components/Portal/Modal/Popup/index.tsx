import * as React from 'react'
import PasStyle from '../../../..'
import { PasStyleProps } from '../../../../../utils/types'
import { SetState } from '../../../../Contexts/types'
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
                    {...{...props, children:null}}
                />
                {children}
            </>
        }
    </>
    )
}

export default Popup
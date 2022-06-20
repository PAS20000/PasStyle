import * as React from 'react'
import PasStyle from '../../..'
import { SetState } from '../../../Contexts/types'
import CreateKind from '../../../utils/CreateKind/index.styles'
import { PasStyleProps } from '../../../utils/types'
import Css from './index.styles'

type Kind = [
    'default'
]

type Props = {
    kind?:Kind[number]
   state:[boolean, SetState<boolean>]
}

const Popup = (props:PasStyleProps<Props>) => {
    
    const {children, kind, state} = props

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
                <PasStyle
                    {...CreateKind({kind, Css})}
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
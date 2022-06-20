import * as React from 'react'
import { SetState } from '../../../../contexts/types'
import { PasStyleProps } from '../../../utils/types'
import Button from '../../Button'

type Props = {
    state:[boolean, SetState<boolean>]
}

const ButtonOpenPopup = (props:PasStyleProps<Props>) => {
    const {state} = props

    const action = {
        open(){
            state[1](true)
        }
    }

    return (
        <>
            {!state[0] && <Button {...props} onClick={action.open} />}
        </>
    )
}

export default ButtonOpenPopup
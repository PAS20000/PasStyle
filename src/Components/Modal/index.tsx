import * as React from 'react'
import { SetState } from '../../Contexts/types'
import Create from '../Create'
import Popup from '../Popup'

type Props = {
    state:[boolean, SetState<boolean>]
    children?:React.ReactNode
}

const Modal = ({
    state,
    children
} : Props) => {
    return(
        <Create.Portal error='Not Found Modal'>
             <Popup state={state}>
                {children}
            </Popup>,
        </Create.Portal>
    )
}

export default Modal
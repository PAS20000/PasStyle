import * as React from 'react'
import { SetState } from '../../Contexts/types'
import CreatePortal from '../CreatePortal'
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
        <CreatePortal error='Not Found Modal'>
             <Popup state={state}>
                {children}
            </Popup>,
        </CreatePortal>
    )
}

export default Modal
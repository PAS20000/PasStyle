import * as React from 'react'
import { SetState } from '../../Contexts/types'
import ModalBody from '../Modal/ModalBody'
import Popup from '../Popup'
import Create from '../Create'
import { PasStyleProps } from '../..'

type Props = {
    state:[boolean, SetState<boolean>]
    children?:React.ReactNode
    message?:React.ReactNode
}

const Alert = {
    Info(props:PasStyleProps<Props>){
        const { state } = props

        return(
            <Create.Portal error='Not Found Alert.Info'>
                <Popup state={state}>
                    <ModalBody transform='translate(100vh, 87vh)'  {...props} />
                </Popup>
            </Create.Portal>
        )
    },
    Warn(props:PasStyleProps<Props>){
        const { state } = props
        
        return(
            <Create.Portal error='Not Found Alert.Warn'>
                <Popup state={state}>
                    <ModalBody transform='translate(100vh, 87vh)'  {...props} />
                </Popup>
            </Create.Portal>
        )
    },
    Error(props:PasStyleProps<Props>){
        const { state, message } = props
        
        return(
            <Create.Portal error='Not Found Alert.Error'>
                <Popup state={state}>
                    <ModalBody transform='translate(100vh, 87vh)' {...props}>
                        {message}
                    </ModalBody>
                </Popup>
            </Create.Portal>
        )
    },
    Success(props:PasStyleProps<Props>){
        const { state } = props
        
        return(
            <Create.Portal error='Not Found Alert.Success'>
                <Popup state={state}>
                    <ModalBody transform='translate(100vh, 87vh)'  {...props} />
                </Popup>
            </Create.Portal>
        )
    },
    Cookies(props:PasStyleProps<Props>){
        const { state } = props
        
        return(
            <Create.Portal error='Not Found Alert.Cookies'>
                <Popup state={state}>
                    <ModalBody transform='translate(100vh, 87vh)'  {...props} />
                </Popup>
            </Create.Portal>
        )
    },

}

export default Alert
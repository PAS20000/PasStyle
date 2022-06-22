import * as React from 'react'
import { SetState } from '../../Contexts/types'
import ModalBody from '../Modal/ModalBody'
import Popup from '../Modal/Popup'
import CreatePortal from '../CreatePortal'
import { PasStyleProps } from '../..'

type Props = {
    state:[boolean, SetState<boolean>]
    children?:React.ReactNode
}

const Alert = {
    Info(props:PasStyleProps<Props>){
        const { state } = props

        return(
            <CreatePortal error='Not Found Alert.Info'>
                <Popup state={state}>
                    <ModalBody transform='translate(100vh, 87vh)'  {...props} />
                </Popup>
            </CreatePortal>
        )
    },
    Warn(props:PasStyleProps<Props>){
        const { state } = props
        
        return(
            <CreatePortal error='Not Found Alert.Warn'>
                <Popup state={state}>
                    <ModalBody transform='translate(100vh, 87vh)'  {...props} />
                </Popup>
            </CreatePortal>
        )
    },
    Error(props:PasStyleProps<Props>){
        const { state } = props
        
        return(
            <CreatePortal error='Not Found Alert.Error'>
                <Popup state={state}>
                    <ModalBody transform='translate(100vh, 87vh)'  {...props} />
                </Popup>
            </CreatePortal>
        )
    },
    Success(props:PasStyleProps<Props>){
        const { state } = props
        
        return(
            <CreatePortal error='Not Found Alert.Success'>
                <Popup state={state}>
                    <ModalBody transform='translate(100vh, 87vh)'  {...props} />
                </Popup>
            </CreatePortal>
        )
    },
    Cookies(props:PasStyleProps<Props>){
        const { state } = props
        
        return(
            <CreatePortal error='Not Found Alert.Cookies'>
                <Popup state={state}>
                    <ModalBody transform='translate(100vh, 87vh)'  {...props} />
                </Popup>
            </CreatePortal>
        )
    },

}

export default Alert
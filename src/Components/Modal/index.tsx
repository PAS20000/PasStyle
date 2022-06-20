import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { SetState } from '../../Contexts/types'
import Popup from './Popup'

type Props = {
    state:[boolean, SetState<boolean>]
    children?:React.ReactNode
}

const Modal = ({
    state,
    children
} : Props) => {

    const [doc, setDoc] = React.useState<HTMLElement>()

    React.useEffect(() => {
        setDoc(document.getElementById('PasStyle-Portal') as HTMLElement)
    }, [])


    if(doc){
        return ReactDOM.createPortal(
            <Popup state={state}>
                {children}
            </Popup>, 
            document.getElementById('PasStyle-Portal')
        )
    } else {
        return <>Not Found Modal</>
    }
   
}

export default Modal
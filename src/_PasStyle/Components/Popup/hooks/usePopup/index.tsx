import * as React from 'react'
import { SetState } from '../../../../../contexts/types'

type Props = {

}

type State =  [boolean, SetState<boolean>]

type Return = {
    state:State
    open:boolean
    setOpen:SetState<boolean>
    action: {
        open:Function
        close:Function
    }
}

const usePopup = () : Return => {

    const [open, setOpen] = React.useState<boolean>(false)

    const PopupState : State = [open, setOpen]

    return {
        state:PopupState,
        open,
        setOpen,
        action: {
            open(){
                setOpen(true)
            },
            close(){
                setOpen(false)
            }
        }
    }
}

export default usePopup
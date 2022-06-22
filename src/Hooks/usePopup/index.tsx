import * as React from 'react'
import { SetState } from '../../Contexts/types'

type Props = {

}

type State =  [boolean, SetState<boolean>]

type Return = {
    state:State
    open:boolean
    setOpen:SetState<boolean>
}

const usePopup = () : Return => {

    const [open, setOpen] = React.useState<boolean>(false)

    const PopupState : State = [open, setOpen]

    return {
        state:PopupState,
        open,
        setOpen,
    }
}

export default usePopup
import * as React from 'react'
import { SetState } from '../../../../contexts/types'

type Props = {

}
type State = [boolean, SetState<boolean>]

type Return = {
    state: State
    open: Function
    close: Function
}

const usePopUp = () : Return => {

    const [open, setOpen] = React.useState<boolean>(false)

    const PopUpState : State = [open, setOpen]

    return {
        state:PopUpState,
        open(){
            setOpen(true)
        },
        close(){
            setOpen(false)
        }
    }
}

export default usePopUp
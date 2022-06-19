import * as React from 'react'
import { SetState } from '../../../../../contexts/types'

type Props = {

}

type Return = [boolean, SetState<boolean>]

const usePopup = () : Return => {

    const [open, setOpen] = React.useState<boolean>(false)

    const PopupState : Return = [open, setOpen]

    return PopupState
}

export default usePopup
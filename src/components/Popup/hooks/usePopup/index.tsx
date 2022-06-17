import * as React from 'react'
import { SetState } from '../../../../contexts/types'

type Props = {

}

type Return = [boolean, SetState<boolean>]

const usePopUp = () : Return => {

    const [open, setOpen] = React.useState<boolean>(false)

    const PopUpState : Return = [open, setOpen]

    return PopUpState
}

export default usePopUp
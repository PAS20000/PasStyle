import * as React from 'react'
import { SetState } from '../../Contexts/types'

type Props = {

}

type State = [boolean, SetState<boolean>]

const usePopup = ()  => {

    const [isClosed, setIsClosed] = React.useState<boolean>(false)
    const [isOpen , setIsOpen] = React.useState<boolean>(true)

    const ClosedStart : State = [isClosed, setIsClosed]
    const OpenStart : State = [isOpen , setIsOpen]

    return {
        ClosedStart,
        OpenStart,
        isClosed,
        setIsClosed,
        isOpen,
        setIsOpen,
    }
}

export default usePopup
import * as React from 'react'
import { FaReact, FaTrash } from 'react-icons/fa'
import { MdOutlineFormatColorFill } from 'react-icons/md'
import { BiReset } from 'react-icons/bi'
import PasStyle from '../../../../src/components/_PasStyle'
import { SetState } from '../../../../src/contexts/types'
import useThemeCTX from '../../../../src/hooks/useThemeCTX'
import Button from './Button'


type Props = {
    setShowForm:SetState<boolean>
}


const Config = ({
    setShowForm
} : Props ) => {

    const { theme } = useThemeCTX()

    return(
        <PasStyle
                pd='10px'
                mg='15px'
                shadow='1px 1px 10px black'
                b_Radius='8px'
                border='solid 1px'
                color={theme.colors.white}
                bg={theme.colors.darkGray}
            >
            <Button onClick={() => setShowForm(true)} title='edit props'>
                <MdOutlineFormatColorFill />
            </Button>
            <Button onClick={() => {}} title='create component'>
                <FaReact />
            </Button>
            <Button onClick={() => {}} title='reset'>
                <BiReset />
            </Button>
            <Button onClick={() => {}} title='delete all'>
                <FaTrash />
            </Button>
        </PasStyle>
    )
}

export default Config
import * as React from 'react'
import { ShowState } from '../..'
import PasStyle from '../../../../src/_PasStyle'
import { SetState } from '../../../../src/contexts/types'
import useThemeCTX from '../../../../src/hooks/useThemeCTX'
import Icons from '../../../../utils/Icons'
import Button from './Button'
import Popup from '../../../../src/_PasStyle/Components/Popup'
import PopupBody from '../../../../src/_PasStyle/Components/Popup/PopupBody'
import Form from '../Form'

type Props = {
    setState:SetState<boolean>
    setShow:SetState<ShowState>
}


const Config = ({
    setState,
    setShow,
} : Props ) => {

    const { theme } = useThemeCTX()

    const openCreate = () => {
        setState(true)
        setShow('create')
    }
    return(
        <PasStyle
                pd='10px'
                mg='20px'
                shadow='1px 1px 10px black'
                b_radius='8px'
                border='solid 1px'
                color={theme.colors.white}
                bg={theme.colors.darkGray}
                t_align='center'
            >
            <Button onClick={() => setState(true)} title='edit props'>
                <Icons.Md.MdOutlineFormatColorFill />
            </Button>
            <Button onClick={() => {}} title='reset'>
                <Icons.Bi.BiReset />
            </Button>
        </PasStyle>
    )
}

export default Config
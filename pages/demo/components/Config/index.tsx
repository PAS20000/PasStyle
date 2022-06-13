import * as React from 'react'
import { ShowState } from '../..'
import PasStyle from '../../../../src/components/_PasStyle'
import { SetState } from '../../../../src/contexts/types'
import useThemeCTX from '../../../../src/hooks/useThemeCTX'
import Icons from '../../../../utils/Icons'
import Button from './Button'

type Props = {
    setShowForm:SetState<boolean>
    setShow:SetState<ShowState>
}


const Config = ({
    setShowForm,
    setShow
} : Props ) => {

    const { theme } = useThemeCTX()

    const openCreate = () => {
        setShowForm(true)
        setShow('create')
    }
    
    return(
        <PasStyle
                pd='10px'
                mg='20px'
                shadow='1px 1px 10px black'
                b_Radius='8px'
                border='solid 1px'
                color={theme.colors.white}
                bg={theme.colors.darkGray}
                t_align='center'
            >
            <Button onClick={() => setShowForm(true)} title='edit props'>
                <Icons.Md.MdOutlineFormatColorFill />
            </Button>
            <Button onClick={() => {}} title='reset'>
                <Icons.Bi.BiReset />
            </Button>
        </PasStyle>
    )
}

export default Config
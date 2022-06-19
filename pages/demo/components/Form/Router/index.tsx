import * as React from 'react'
import { ShowState } from '../../..'
import PasStyle from '../../../../../src/_PasStyle'
import { SetState } from '../../../../../src/contexts/types'
import useThemeCTX from '../../../../../src/_PasStyle/Contexts/ThemeContext/useThemeCTX'

type Props = {
    show:ShowState
    setShow:SetState<ShowState>
}

const Router = ({
    show,
    setShow
} : Props) => {

    const { theme } = useThemeCTX()

    return(
        <PasStyle flex around
            mg='0px 30px 0px' 
            pd='8px'
            bg={theme.colors.bg}
            t_align='center'
        >
            <PasStyle
                onClick={() => setShow('props')}
                w='33%'
                b_bottom='solid 1px'
                color={show === 'props' ? theme.colors.green : theme.colors.white}
                cursor='pointer'
                f_size='18px'
                t_transform='uppercase'
                _hover={{
                   transition: '1s',
                   color: theme.colors.green,
               }}
            >
                props
            </PasStyle>
            <PasStyle
               onClick={() => setShow('hover')}
               w='33%'
               b_bottom='solid 1px'
               color={show === 'hover' ? theme.colors.green : theme.colors.white}
               cursor='pointer'
               f_size='18px'
               t_transform='uppercase'
               _hover={{
                   transition: '1s',
                   color: theme.colors.green,
               }}
            >
                hover
            </PasStyle>
            <PasStyle
                w='33%'
                onClick={() => setShow('css')}
                b_bottom='solid 1px'
                t_transform='uppercase'
                color={show === 'css' ? theme.colors.green : theme.colors.white}
                cursor='pointer'
                f_size='18px'
                _hover={{
                   transition: '1s',
                   color: theme.colors.green,
               }}
            >
                Codes
            </PasStyle>
        </PasStyle>
    )
}

export default Router
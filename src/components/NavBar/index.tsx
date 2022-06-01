import * as React from 'react'
import useThemeCTX from '../../hooks/useThemeCTX'
import PasStyle from '../_PasStyle'
import { FaMoon, FaSun } from 'react-icons/fa'

const NavBar = () => {

    const { theme, mode, changeMode } = useThemeCTX()

    return(
        <PasStyle flex between
            tag='NAV'
            bg={theme.colors.bg}
            pd='10px'
        >
            <PasStyle 
                tag='NEXTLINK'
                href='/'
                t_decoration='none'
                f_size='36px'
                f_weight='600'
                color={theme.colors.cyan}
                _hover={{
                    transition: '1s',
                    color:theme.colors.green,
                }}
            >
                {'<PasStyle>'}
            </PasStyle>
            <PasStyle  
                onClick={() => changeMode()}
                tag='BUTTON'
                color={theme.colors.cyan}
                bg='transparent'
                border='solid 2px'
                b_Radius='50%'
                w='40px'
                h='40px'
                mg='10px 0px 0px'
                cursor='pointer'
                t_transform='uppercase'
                f_weight='300'
                _hover={{
                    transition: '1s',
                    bg:theme.colors.darkGray,
                    color:theme.colors.green,
                }}
            >
                <PasStyle 
                    tag='SPAN'
                    mg='0px 5px 0px'
                >
                    {mode === 'light' ?
                        <FaSun /> 
                        :
                        <FaMoon />
                    }
                </PasStyle>
            </PasStyle>
        </PasStyle>
    )
}

export default NavBar
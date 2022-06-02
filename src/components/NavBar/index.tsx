import * as React from 'react'
import useThemeCTX from '../../hooks/useThemeCTX'
import PasStyle from '../_PasStyle'
import { FaMoon, FaSun } from 'react-icons/fa'
import Router from './Router'
import Select from '../Select'
import Option from '../Select/Option'

type Props = {
    current?:'docs' | 'demo' | 'git'
}

const NavBar = ({
    current
}: Props) => {

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
            <PasStyle flex
                mg='18px'
            >
                <Select title='Language'>
                    <Option>
                        EN
                    </Option>
                    <Option>
                        PT
                    </Option>
                </Select>
                <Router 
                    href='/'
                    name='Docs'
                    current={current === 'docs' ? true : false}
                />
                <Router 
                    href='/demo/'
                    name='Demo'
                    current={current === 'demo' ? true : false}
                />
                <Router 
                    href='/git/'
                    name='Github'
                    current={current === 'git' ? true : false}
                />
                 <PasStyle  
                    onClick={() => changeMode()}
                    tag='BUTTON'
                    color={theme.colors.cyan}
                    bg='transparent'
                    cursor='pointer'
                    border='none'
                    t_transform='uppercase'
                    f_weight='300'
                    b_Radius='8px'
                    _hover={{
                        transition: '1s',
                        bg:theme.colors.darkGray,
                        color:theme.colors.green,
                    }}>
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
        </PasStyle>
    )
}

export default NavBar
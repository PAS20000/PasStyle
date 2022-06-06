import * as React from 'react'
import useThemeCTX from '../../hooks/useThemeCTX'
import PasStyle from '../_PasStyle'
import { FaMoon, FaSun } from 'react-icons/fa'
import Router from './Router'
import Select from '../Select'
import Option from '../Select/Option'
import { useRouter } from 'next/router'

type Props = {
    current?:'docs' | 'demo' | 'git'
}

const NavBar = ({
    current
}: Props) => {

    const { theme, mode, changeMode } = useThemeCTX()

    const router = useRouter()

    return(
        <PasStyle flex between
            tag='NAV'
            bg={theme.colors.bg}
            pd='10px'
        >
            <PasStyle flex
                tag='NEXTLINK'
                href='/'
                t_decoration='none'
                f_size='24px'
                mg='18px 0px 0px'
                f_weight='600'
                color={theme.colors.white}
                _hover={{
                    transition: '1s',
                    color:theme.colors.purple,
                }}
            >
                {'<PasStyle>'}
            </PasStyle>
            <PasStyle flex
                mg='18px'
            >
                <Select title={`Language`} w='130'>
                   <Option onClick={() => router.push('/')}>
                       EN 🇺🇸
                   </Option>
                   <Option  onClick={() => router.push('/pt/')}>
                       PT 🇧🇷
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
                    color={theme.colors.white}
                    bg='transparent'
                    cursor='pointer'
                    border='none'
                    t_transform='uppercase'
                    f_weight='300'
                    b_Radius='8px'
                    _hover={{
                        transition: '1s',
                        bg:theme.colors.darkGray,
                        color:theme.colors.yellow,
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
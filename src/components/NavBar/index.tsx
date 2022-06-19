import * as React from 'react'
import PasStyle from '../../_PasStyle'
import { FaMoon, FaSun } from 'react-icons/fa'
import Router from './Router'
import { useRouter } from 'next/router'
import useUserExperienceCTX from '../../hooks/useUserExperienceCTX'
import useThemeCTX from '../../_PasStyle/Contexts/ThemeContext/useThemeCTX'
import Option from '../Select/Option'
import Select from '../../_PasStyle/Components/Select'

type Props = {
    current?:'docs' | 'demo' | 'git'
}

const NavBar = ({
    current,
}: Props) => {

    const { theme, mode, changeMode } = useThemeCTX()
    const { globalOpen, setGlobalOpen } = useUserExperienceCTX()

    const [lang, setLang] = React.useState<string>('en')


    const router = useRouter()
    const open = () => {
        setGlobalOpen({
            ...globalOpen,
            navSelect:globalOpen.navSelect ? false : true
        })
    }

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
                    color:theme.colors.green,
                }}
                _media={{
                    min:[500, {
                        color:'blue'
                    }]
                }}
            >
                {'<PasStyle>'}
            </PasStyle>
            <PasStyle flex
                mg='18px'
            >
                <Select title={`Language`} 
                    w='130px' 
                    wOptions='65px'
                    transform='translate(20px, 5px)'
                    onClick={open} 
                    open={globalOpen.navSelect}
                >
                    <Option onClick={() => router.push('/')} value='🇺🇸 EN'>
                        🇺🇸 EN 
                    </Option>
                    <Option  onClick={() => router.push('/pt/')} value='🇧🇷 PT'>
                        🇧🇷 PT
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
                    pd='5px'
                    border='none'
                    t_transform='uppercase'
                    f_weight='300'
                    b_radius='8px'
                    _hover={{
                        transition: '1s',
                        color:theme.colors.yellow,
                    }}>
                    <PasStyle 
                        tag='SPAN'
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
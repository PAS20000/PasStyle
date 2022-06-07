import * as React from 'react'
import useId from '../../hooks/useId/useId'
import useThemeCTX from '../../hooks/useThemeCTX'
import PasStyle from '../_PasStyle'
import { Styles } from '../_PasStyle/types'

type Props = {
    icon?:React.ReactNode
    prop?:string
    placeholder?:string
    onChange?:React.MouseEventHandler
    value?:string
    type?:string
}

const Field = ({
    icon,
    prop,
    placeholder,
    value,
    onChange,
    type
} : Props) => {

    const { theme } = useThemeCTX()

    const { random } = useId('color')

    return(
        <PasStyle mg='15px 10px 0px'>
            <PasStyle tag='LABEL'
                position='absolute'
                bg={theme.colors.bg}
                mg='0px 10px 0px'
                color={theme.colors.green}
                transform='translateY(-10px)'
                pd='0px 2px 0px'
                b_Radius='8px'
                f_size='14px'
                t_transform='capitalize'
            >
               {prop ?? 'prop'}
            </PasStyle>
            <PasStyle>
            {icon &&
                <PasStyle tag='SPAN'
                    color={theme.colors.green}
                    position='absolute'
                    f_size='14px'
                    pd='10px'
                >
                   {icon}
                </PasStyle> 
            }
            {type === 'color' ? 
                <PasStyle w='93%'
                    onClick={() => document.getElementById(random).click()}
                    bg={theme.colors.bg} 
                    border='solid 2px' 
                    b_Color={theme.colors.cyan}
                    color={theme.colors.yellow}
                    pd='5px'
                    placeholder={placeholder}
                    b_Radius='8px'
                    f_size='14px'
                >
                    <PasStyle tag='INPUT'
                        id={random}
                        type={type} 
                        bg={theme.colors.bg} 
                        border='none'
                        onChange={onChange}
                        h='30px'
                        w='30px'
                        value={value}
                    />
                    <PasStyle tag='SPAN' position='absolute' pd='5px'>
                        {value}
                    </PasStyle>
                </PasStyle>
                :
                <PasStyle tag='INPUT' 
                    onChange={onChange}
                    pd='10px'
                    w='90%'
                    b_Radius='8px'
                    border='solid 2px'
                    bg={theme.colors.bg}
                    color={theme.colors.yellow}
                    b_Color={theme.colors.cyan}
                    outline_color={theme.colors.yellow}
                    placeholder={placeholder}
                    type={type}
                    value={value}
                />
            }
            </PasStyle>
        </PasStyle>
    )
}

export default Field
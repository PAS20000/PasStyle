import * as React from 'react'
import useThemeCTX from '../../hooks/useThemeCTX'
import PasStyle from '../_PasStyle'
import { Styles } from '../_PasStyle/types'

type Props = {
    icon?:React.ReactNode
    prop?:string
    placeholder?:string
    onChange?:React.MouseEventHandler
    value?:string
}

const Field = ({
    icon,
    prop,
    placeholder,
    value,
    onChange
} : Props) => {

    const { theme } = useThemeCTX()

    

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
                type='text'
                value={value}
            />
            </PasStyle>
        </PasStyle>
    )
}

export default Field
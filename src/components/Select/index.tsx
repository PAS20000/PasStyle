import * as React from 'react'
import { GoKebabVertical } from 'react-icons/go'
import useThemeCTX from '../../hooks/useThemeCTX'
import useUserExperienceCTX from '../../hooks/useUserExperienceCTX'
import PasStyle from '../_PasStyle'

type Props = {
    title:string
    children?:React.ReactNode
    icon?:React.ReactChild
    w?:string
    onClick?:React.MouseEventHandler
    open?:boolean
    value?:string
}

const Select = ({
    title,
    children,
    icon,
    w,
    open,
    onClick,
    value
} : Props) => {

    const { theme } = useThemeCTX()
    

    return(
        <PasStyle w={w}>
            <PasStyle 
                 f_size='12px'
                 mg='0px 20px 0px'
                 pd='5px'
                 cursor='pointer'
                 t_decoration='none'
                 b_Radius='8px'
                 border='solid 2px'
                 color={open ? theme.colors.green : theme.colors.white}
                 _hover={{
                     transition: '1s',
                     color:theme.colors.green,
                     bg:theme.colors.darkGray
                 }}
                onClick={onClick}
            >
                <PasStyle flex between>
                    <PasStyle>
                        {title} 
                    </PasStyle>
                    {icon ??  <GoKebabVertical  style={{marginTop:'3px', fontSize:'14px'}}/>}
                </PasStyle>
            </PasStyle>
            {open &&
                <PasStyle grid
                    position='absolute'
                    bg={theme.colors.bg}
                    transform='translate(20px, 5px)'
                    pd='10px'
                    b_Radius='8px'
                    border='solid 1px'
                    b_Color={theme.colors.green}
                    t_align='center'
                    animation='show'
                    z='3'
                    w={`${(parseInt(w) - 65).toString()}px`}
                >
                    {children}
                </PasStyle>
            }
        </PasStyle>
    )
}

export default Select
import * as React from 'react'
import { GoKebabVertical } from 'react-icons/go'
import useThemeCTX from '../../hooks/useThemeCTX'
import PasStyle from '../_PasStyle'

type Props = {
    title:string
    children?:React.ReactNode
    icon?:React.ReactChild
    w?:string
}

const Select = ({
    title,
    children,
    icon,
    w
} : Props) => {

    const { theme } = useThemeCTX()

    const [open, setOpen] = React.useState<boolean>(false)

    const Open = () => {
        setOpen(open ? false : true)
    }

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
                 color={open ? theme.colors.purple : theme.colors.white}
                 _hover={{
                     transition: '1s',
                     color:theme.colors.purple,
                     bg:theme.colors.darkGray
                 }}
                onClick={Open}
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
                    onMouseLeave={Open}
                    position='absolute'
                    bg={theme.colors.bg}
                    transform='translate(20px, -35px)'
                    pd='10px'
                    b_Radius='8px'
                    color={theme.colors.purple}
                    border='solid 2px'
                    shadow='2px 2px 2px black'
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
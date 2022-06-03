import * as React from 'react'
import { GoKebabVertical } from 'react-icons/go'
import useThemeCTX from '../../hooks/useThemeCTX'
import PasStyle from '../_PasStyle'
import Option from './Option'

type Props = {
    title:string
    children?:React.ReactNode
    icon?:React.ReactChild
}

const Select = ({
    title,
    children,
    icon
} : Props) => {

    const { theme } = useThemeCTX()

    const [open, setOpen] = React.useState<boolean>(false)

    return(
        <PasStyle>
            <PasStyle 
                 f_size='12px'
                 mg='0px 20px 0px'
                 pd='5px'
                 cursor='pointer'
                 t_decoration='none'
                 b_Radius='8px'
                 border='solid 2px'
                 color={open  ? theme.colors.purple : theme.colors.white}
                 _hover={{
                     transition: '1s',
                     color:theme.colors.purple,
                     bg:theme.colors.darkGray
                 }}
                onClick={() => setOpen(open ? false : true)}
            >
                <PasStyle flex between>
                    <PasStyle>
                        {title} 
                    </PasStyle>
                    {icon ??  <GoKebabVertical  style={{marginTop:'3px'}}/>}
                </PasStyle>
            </PasStyle>
            {open &&
                <PasStyle grid
                    position='absolute'
                    bg={theme.colors.darkGray}
                    transform='translate(5px, 8px)'
                    pd='5px'
                    b_Radius='8px'
                    w='100px'
                    color={theme.colors.purple}
                    border='solid 2px'
                    shadow='2px 2px 2px black'
                    t_align='center'
                    animation='show'
                >
                    {children}
                </PasStyle>
            }
        </PasStyle>
    )
}

export default Select
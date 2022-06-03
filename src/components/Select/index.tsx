import * as React from 'react'
import useThemeCTX from '../../hooks/useThemeCTX'
import PasStyle from '../_PasStyle'
import Option from './Option'

type Props = {
    title:string
    children?:React.ReactNode
}

const Select = ({
    title,
    children
} : Props) => {

    const { theme } = useThemeCTX()

    const [open, setOpen] = React.useState<boolean>(false)

    return(
        <PasStyle>
            <PasStyle 
                 f_size='12px'
                 f_weight='600'
                 mg='0px 5px 0px'
                 pd='5px'
                 cursor='pointer'
                 t_decoration='none'
                 b_Radius='8px'
                 color={open  ? theme.colors.green : theme.colors.white}
                 _hover={{
                     transition: '1s',
                     color:theme.colors.green,
                     bg:theme.colors.darkGray
                 }}
                onClick={() => setOpen(open ? false : true)}
            >
                {title}
            </PasStyle>
            {open &&
                <PasStyle grid
                    position='absolute'
                    bg={theme.colors.darkGray}
                    transform='translate(-15px, 8px)'
                    pd='5px'
                    b_Radius='8px'
                    w='100px'
                    color={theme.colors.cyan}
                    border='solid 2px'
                    shadow='2px 2px 2px black'
                    t_align='center'
                >
                    {children}
                </PasStyle>
            }
        </PasStyle>
    )
}

export default Select
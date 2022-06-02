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
                mg='0px 5px 0px' 
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
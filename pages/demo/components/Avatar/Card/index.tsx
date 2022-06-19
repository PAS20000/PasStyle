import * as React from 'react'
import PasStyle from '../../../../../src/_PasStyle'
import useThemeCTX from '../../../../../src/_PasStyle/Contexts/ThemeContext/useThemeCTX'

type Props = {
    title:string
    children:React.ReactNode
    icon?:React.ReactNode
}

const Card = ({
    title,
    icon,
    children
} : Props) => {

    const {theme} = useThemeCTX()

    return(
        <PasStyle
            pd='20px'
            mg='20px'
            shadow='2px 2px 10px black'
            b_radius='8px'
            t_align='center'
            w='20%'
            bg={theme.colors.bg}
        >
            <PasStyle 
                tag='SPAN'
                f_size='1.1rem'
                mg='5px'
            >
                {icon} 
            </PasStyle>
            {title} 
            <br />
            {children}
        </PasStyle>
    )
}

export default Card
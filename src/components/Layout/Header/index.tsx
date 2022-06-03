import * as React from 'react'
import useThemeCTX from '../../../hooks/useThemeCTX'
import PasStyle from '../../_PasStyle'

type Props = {
    children?:React.ReactNode
}

const Header = ({
    children
} : Props) => {

    const { theme } = useThemeCTX()

    return(
        <PasStyle 
            tag='HEADER'
            position='fixed'
            w='100%'
            transform='translateY(-2vh)'
            shadow='2px 2px 2px black'
            z='3'
        >
            {children}
        </PasStyle>
    )
}

export default Header
import * as React from 'react'
import useThemeCTX from '../../../hooks/useThemeCTX'
import PasStyle from '../../_PasStyle'

type Props = {
    children?:React.ReactNode
}

const Main = ({
    children
} : Props) => {

    const { theme } = useThemeCTX()

    return(
        <PasStyle
            tag='MAIN' 
            pd='60px 0px 50px'
            h='100%'
            bg={theme.colors.darkGray}
        >
            {children}
        </PasStyle>
    )
}

export default Main
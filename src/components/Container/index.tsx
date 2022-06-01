import * as React from 'react'
import useThemeCTX from '../../hooks/useThemeCTX'
import PasStyle from "../_PasStyle"

type Props = {
    children?:React.ReactNode
}

const Container = ({
    children,
} : Props) => {

    const { theme } = useThemeCTX()

    return(
        <PasStyle tag='SECTION'
            bg={theme.colors.bg}
            pd='20px'
            mg='20px'
        >
            {children}
        </PasStyle>
    )
}

export default Container
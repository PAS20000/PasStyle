import * as React from 'react'
import useThemeCTX from '../../hooks/useThemeCTX'
import PasStyle from "../_PasStyle"

type Props = {
    children?:React.ReactNode
}

const Code = ({
    children,
} : Props) => {

    const { theme } = useThemeCTX()

    return(
        <PasStyle tag='ARTICLE'>
            <PasStyle 
                tag='CODE'
                bg={theme.colors.quartenary}
                color={theme.colors.tertiary}
                pd='20px'
            >
                {children}
            </PasStyle>
        </PasStyle>
    )
}

export default Code
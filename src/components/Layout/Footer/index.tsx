import * as React from 'react'
import useThemeCTX from '../../../hooks/useThemeCTX'
import PasStyle from '../../../_PasStyle'

type Props = {
    children?:React.ReactNode
}

const Footer = ({
    children
} : Props) => {

    const { theme } = useThemeCTX()

    return(
        <PasStyle tag='FOOTER'>
            {children}
        </PasStyle>
    )
}

export default Footer
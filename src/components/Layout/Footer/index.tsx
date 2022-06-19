import * as React from 'react'
import PasStyle from '../../../_PasStyle'

type Props = {
    children?:React.ReactNode
}

const Footer = ({
    children
} : Props) => {
    return(
        <PasStyle tag='FOOTER'>
            {children}
        </PasStyle>
    )
}

export default Footer
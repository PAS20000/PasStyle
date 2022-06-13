import * as React from 'react'
import PasStyle from '../../../../../src/components/_PasStyle'

type Props = {
    title:string
    children:React.ReactNode
}

const Card = ({
    title,
    children
} : Props) => {

    return(
        <PasStyle>
            {title} <br />
            {children}
        </PasStyle>
    )
}

export default Card
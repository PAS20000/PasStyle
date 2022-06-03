import * as React from 'react'
import useThemeCTX from '../../../hooks/useThemeCTX'
import PasStyle from "../../_PasStyle"

type Props = {
    children?:React.ReactNode
}

const Container = ({
    children,
} : Props) => {

    const { theme } = useThemeCTX()

   

    return(
        <PasStyle tag='SECTION'
            mg='50px'
            pd='20px'
        >
            {children}
        </PasStyle>
    )
}

export default Container
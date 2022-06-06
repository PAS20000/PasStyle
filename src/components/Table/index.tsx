import * as React from 'react'
import PasStyle from '../_PasStyle'
import useThemeCTX from '../../hooks/useThemeCTX'

type Props = {
    children?:React.ReactNode
}

const Table = ({
    children
}) => {

    const { theme } = useThemeCTX()

    return(
        <>
            <PasStyle
                tag='TABLE'
            >
              
            </PasStyle>
        </>
    )
}

export default Table